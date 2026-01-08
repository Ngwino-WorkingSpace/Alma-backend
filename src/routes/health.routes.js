import express from "express";
import { supabase } from "../services/supabase.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("users")   // 👈 CHANGE this to ANY existing table
    .select("*")
    .limit(1);

  if (error) {
    console.error("Supabase error:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Supabase connection failed"
    });
  }

  res.json({
    status: "success",
    message: "Supabase connected",
    rows_checked: data.length
  });
});

export default router;
