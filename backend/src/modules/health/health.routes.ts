import { Router, type Request, type Response } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      service: "smartsocial-backend",
      status: "healthy",
      timestamp: new Date().toISOString()
    }
  });
});
