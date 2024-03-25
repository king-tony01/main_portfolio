import "dotenv/config";
import { createServer } from "http";
import { fileURLToPath, parse } from "url";
import { dirname } from "path";
import { serveHome } from "./private/file.js";
import { type } from "./private/contentType.js";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
const PORT = process.env.PORT;
const server = createServer((req, res) => {
  const { pathname, query } = parse(req.url, true);
  if (pathname.includes(".")) {
    type(pathname, res);
  }
  if (pathname == "/") {
    serveHome(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

export default server;
