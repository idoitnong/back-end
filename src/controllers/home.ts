import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response) => {
  res.send("Lovely My Angel Ayase-tan!");
};
