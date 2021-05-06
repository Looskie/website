import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ uwu: "uwu!!!" });
};
