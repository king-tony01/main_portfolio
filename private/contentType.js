import { extname, join } from "path";
import { serveFile } from "./file.js";
import { __dirname } from "../server.js";
export function type(file_path, response) {
  const extention = extname(file_path);
  let contentType;
  switch (extention) {
    case ".css":
      contentType = "text/css";
      serveFile(
        {
          path: join(__dirname, file_path),
          media: false,
          content_type: contentType,
        },
        response
      );
      break;
    case ".js":
      contentType = "application/javascript";
      serveFile(
        {
          path: join(__dirname, file_path),
          media: false,
          content_type: contentType,
        },
        response
      );
      break;
    case ".png":
      contentType = "image/png";
      serveFile(
        {
          path: join(__dirname, file_path),
          media: true,
          content_type: contentType,
        },
        response
      );
      break;
    case ".jpg":
      contentType = "image/jpg";
      serveFile(
        {
          path: join(__dirname, file_path),
          media: true,
          content_type: contentType,
        },
        response
      );
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      serveFile(
        {
          path: join(__dirname, file_path),
          media: true,
          content_type: contentType,
        },
        response
      );
      break;
  }
}
