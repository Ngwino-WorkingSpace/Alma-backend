import express from "express";
import sql from "../services/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await sql`SELECT NOW()`;
    res.json({
      status: "success",
      time: result[0].now,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "DB failed" });
  }
});

export default router;
