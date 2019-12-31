import { Request, Response, Router } from "express";

import weatherCtrl from "./../controller/weather";
const app = Router();

app.route("/").get(async (req: Request, res: Response) => {
  const { query } = req;
  const resp = await weatherCtrl.get(query);
  res.send(resp);
});

export default app;
