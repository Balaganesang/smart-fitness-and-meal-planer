import pool from './src/config/db.js';

async function migrate() {
    try {
        await pool.query('ALTER TABLE Users ADD COLUMN role TEXT DEFAULT "user"');
        console.log('✅ Column "role" added to Users table');
    } catch (err) {
        console.log('ℹ️ Column "role" might already exist or table not ready.');
    }

    try {
        await pool.query('INSERT OR IGNORE INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)',
            ['System Admin', 'admin@fitrack.com', 'admin123', 'admin']
        );
        console.log('✅ Admin account ensured: admin@fitrack.com / admin123');
    } catch (err) {
        console.error('❌ Error during setup:', err);
    }
    process.exit(0);
}

migrate();
