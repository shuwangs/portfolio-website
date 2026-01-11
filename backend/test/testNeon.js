import pool from "../utils/db.js";

(async () => {
  try {
    const r = await pool.query("select version()");
    console.log(r.rows[0]);
  } catch (e) {
    console.error("DB connect failed:", e);
  } finally {
    await pool.end();
  }
})();