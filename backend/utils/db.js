import {Pool} from 'pg';
import dotenv from 'dotenv'

dotenv.config();

if(!process.env.DATABASE_URL) {
    throw new Error("Missing DATABASE_URL in .env");

}
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl:{rejectUnauthorized: false},
})




// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME

// })

export default pool; 