export function parseGitHubRepoUrl(url) {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)(\/|$)/);
    if (!match) throw new Error("Invalid GitHub repo URL");
    const owner = match[1];
    const repo = match[2];
    return { owner, repo };
}
