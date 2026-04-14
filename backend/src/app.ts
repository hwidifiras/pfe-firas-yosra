import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { healthRouter } from "./modules/health/health.routes.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: "1mb" }));
  app.use(morgan("dev"));

  app.get("/", (_req, res) => {
    res.json({
      name: "SmartSocial API",
      version: "0.1.0",
      status: "ok"
    });
  });

  app.use("/api/v1/health", healthRouter);

  return app;
}
