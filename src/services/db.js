import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const sql = neon(process.env.DATABASE_URL);

export async function testDB() {
  await sql`SELECT 1`;
  console.log("✅ Neon DB connected (serverless)");
}

export default sql;
