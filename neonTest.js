import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Neon requires SSL
});

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ DB connected:", res.rows[0]);
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
  } finally {
    await pool.end();
  }
})();
