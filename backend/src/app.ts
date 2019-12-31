import express from "express";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";

import api from "./api/routes";

const rejectFolders: string[] = [];

const app = express();

app.use(compression());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms", {
    skip: (req: any) => rejectFolders.indexOf(req.url.split("/")[1]) !== -1
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api", api);

export default app;


