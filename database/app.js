const { pool, testConnection } = require('./conn');

// Test the database connection
testConnection().then(() => {
    // You can add more code here once you confirm the connection works
    console.log('Database setup complete. You can now proceed with your application.');
    
    // Optional: Close the pool when done (in a real app, you might not do this immediately)
    pool.end().then(() => console.log('Connection pool closed.'));
});