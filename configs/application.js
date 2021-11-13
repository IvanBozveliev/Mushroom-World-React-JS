import path from "path";

const defaultPort = 5000;
export const port = process.env.PORT || defaultPort;
export const staticFilesRelativePath = "./public";
export const clientIndexFile = path.resolve(`${staticFilesRelativePath}/index.html`);

export default {
    port,
    staticFilesRelativePath,
    clientIndexFile
}