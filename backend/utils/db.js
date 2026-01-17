import {Pool} from 'pg';
import dotenv from 'dotenv'

dotenv.config("../.env");
console.log(process.env.DATABASE_URL);

if(!process.env.DATABASE_URL) {
    throw new Error("Missing DATABASE_URL in .env");

}
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl:{rejectUnauthorized: false},
})


export default pool; 