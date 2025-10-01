import express from "express";
import cors from "cors";
import { WebSocketServer } from "ws";
import authRoutes from "./auth.js";
import db from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// WebSocket setup
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("Received:", message.toString());
    ws.send(JSON.stringify({ echo: message.toString() }));
  });
});