import sql from 'mssql';

const config = {
    user: process.env.AZURE_SQL_USER,
    password: process.env.AZURE_SQL_PASSWORD,
    server: process.env.AZURE_SQL_SERVER,
    database: process.env.AZURE_SQL_DATABASE,
    options: {
        encrypt: true, // Vital para Azure
        trustServerCertificate: false
    }
};

export async function conectarDB() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (err) {
        console.error('Error de conexión a Azure SQL:', err);
        throw err;
    }
}