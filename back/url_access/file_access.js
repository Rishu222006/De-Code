export async function fetchFileContent(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch file: ${url}`);
    return await res.text();
}
