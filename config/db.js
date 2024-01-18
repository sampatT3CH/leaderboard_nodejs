import mysql from 'mysql2';


// connect to mysql
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: 'udtcawsphre3reqy',
    password: 'NH6oWvxqLFe1BxxHYZ1I',
    database: process.env.DB_DBNAME,
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
