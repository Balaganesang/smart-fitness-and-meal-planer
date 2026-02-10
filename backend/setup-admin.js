import pool from './src/config/db.js';

async function setupAdmin() {
    try {
        await pool.query('INSERT OR IGNORE INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)',
            ['System Admin', 'admin@fitrack.com', 'admin123', 'admin']
        );
        console.log('✅ Admin account created: admin@fitrack.com / admin123');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error creating admin:', err);
        process.exit(1);
    }
}

setupAdmin();
