import { readFile } from "fs";
import { join } from "path";
import { __dirname } from "../server.js";
export function serveFile(payload, response) {
  readFile(payload.path, payload.media ? "" : "utf-8", (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Internal Server error!" }));
    } else {
      response.writeHead(200, { "Content-Type": payload.content_type });
      response.end(data);
    }
  });
}

export function serveHome(response) {
  readFile(
    join(__dirname, "public/html", "index.html"),
    "utf-8",
    (err, data) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Internal Server error!" }));
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    }
  );
}
