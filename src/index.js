import "dotenv/config";
import express from "express";
import healthRoutes from "./routes/health.routes.js"


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Alma backend is running 🚀" });
});



app.use("/health", healthRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

