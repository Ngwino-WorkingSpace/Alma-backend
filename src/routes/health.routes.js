import express from "express";
import { supabase } from "../services/supabase.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .limit(1)

  if (error) {
    console.error("Supabase error:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Supabase connection failed"
    })
  }

  res.json({
    status: "success",
    message: "Supabase connected",
    rows_checked: data.length
  })
})

router.post("/register", async(req, res)=>{
  
})


export default router;
