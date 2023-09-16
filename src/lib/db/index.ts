import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import "dotenv/config";
 
export const db = drizzle(sql)
