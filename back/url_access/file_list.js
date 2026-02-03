import fetch from "node-fetch";

export async function fetchRepoFiles(owner, repo, branch = "main") {
    const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
    const res = await fetch(treeUrl);
    if (!res.ok) throw new Error("Failed to fetch repo tree");
    const data = await res.json();

    const IGNORE_DIRS = [
        "node_modules",
        "dist",
        "build",
        ".next",
        "public",
        "coverage"
    ];

    // Filter for code files
    return data.tree
        .filter(f =>
            f.type === "blob" &&
            /\.(js|ts|py|java|cpp|c|cs|jsx|tsx)$/.test(f.path) &&
            !f.path.includes(".config.") &&
            !IGNORE_DIRS.some(dir => f.path.startsWith(dir + "/")) &&
            (
                f.path.startsWith("src/") ||
                f.path.startsWith("app/") ||
                f.path.startsWith("lib/") ||
                f.path.startsWith("server/")
            )
        )
        .map((f) => `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${f.path}`);
}
