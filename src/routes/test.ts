import { Router, Request, Response } from "express";

const router = Router();

router.get("/ia", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Usuario actuzalizada",
    content: "",
  });
});

export { router };
