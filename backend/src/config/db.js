import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let db;
export const getDb = async () => {
    if (!db) {
        db = await open({
            filename: path.join(__dirname, '../../database.sqlite'),
            driver: sqlite3.Database
        });
        // Initialize tables
        await db.exec(`
            CREATE TABLE IF NOT EXISTS Users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                age INTEGER,
                gender TEXT,
                height REAL,
                weight REAL,
                goal TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS WorkoutMealPlans (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                day TEXT NOT NULL,
                exercises TEXT NOT NULL,
                meals TEXT NOT NULL,
                completed_status TEXT,
                FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
            );
        `);
    }
    return db;
};
// Mock the pool interface for minimal code changes in controllers
export default {
    query: async (sql, params = []) => {
        const database = await getDb();
        // Simple heuristic to differentiate between select and modify
        if (sql.trim().toUpperCase().startsWith('SELECT')) {
            const rows = await database.all(sql, params);
            return [rows];
        }
        else {
            const result = await database.run(sql, params);
            return [{ insertId: result.lastID, affectedRows: result.changes }];
        }
    }
};
//# sourceMappingURL=db.js.map