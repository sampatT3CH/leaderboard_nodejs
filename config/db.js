import mysql from 'mysql2';


// connect to mysql
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: 'sampat',
    database: process.env.DATABASE,
});

const connectDB = async () => {
    try {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL: ' + err.stack);
                return;
            }
            console.log('Connected to MySQL');
        });
    } catch (error) {
        console.log(`Error in MySQL connection: ${error}`);
    }
};

export { connection, connectDB };