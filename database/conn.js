const mysql = require('mysql2/promise'); // Using the promise-based version

// Database connection configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Um@ir.123+!', // Add your MySQL password here if you have one
    database: 'onlinelearningplatform',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Function to test the connection
async function testConnection() {
    let connection;
    try {
        connection = await pool.getConnection();
        console.log('Successfully connected to the MySQL database!');
        
        // Optional: Run a simple query to verify
        const [rows] = await connection.query('SELECT 1 + 1 AS solution');
        console.log('Test query result:', rows[0].solution);
    } catch (err) {
        console.error('Error connecting to MySQL:', err);
    } finally {
        if (connection) connection.release();
    }
}

// Export the pool and test function
module.exports = {
    pool,
    testConnection
};