import { connection, connectDB } from '../config/db.js';

//Display current week leaderboard
export const currentWeekLeaderBoard = async (req, res) => {
    try {

        await connectDB();
        const sqlQuery = 'SELECT UID, Name, Score, Country, TimeStamp FROM leaderboard WHERE WEEK(TimeStamp) = WEEK(CURDATE()) ORDER BY Score DESC LIMIT 200';

        connection.query(sqlQuery, (error, results) => {
            if (error) {
                console.error('Error: ' + error.message);
                res.status(401).send({
                    success: false,
                    message: error.message,
                  });
                return;
            }
            console.log('data:', results);
            res.status(200).send({
                success: true,
                message: "succefully extracted data  for current week",
                results,
              });
        });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error",
        error,
      });
    }
  };


  //Display last week leaderboard given a country by the user
  export const lastWeekLeaderBoard = async (req, res) => {
    try {

        await connectDB();

        const sqlQuery = `SELECT UID, Name, Score, Country, TimeStamp FROM leaderboard WHERE WEEK(TimeStamp) = WEEK(CURDATE()) - 1 AND Country = ${req.query.country} ORDER BY Score DESC LIMIT 200`;
        

        connection.query(sqlQuery, (error, results) => {
            if (error) {
                console.error('Error: ' + error.message);
                res.status(401).send({
                    success: false,
                    message: error.message,
                  });
                return;
            }
            console.log('data:', results);
            res.status(200).send({
                success: true,
                message: "succefully extracted data for last week",
                results,
              });
        });
     
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error",
        error,
      });
    }
  };


//Fetch user rank, given the userId
  export const userRank = async (req, res) => {
    try {

        await connectDB();

        const sqlQuery = `SELECT user_rank
        FROM (
            SELECT UID, RANK() OVER (ORDER BY Score DESC) AS user_rank
            FROM leaderboard
        ) AS ranked_users
        WHERE UID = ${req.query.uid};
        `;
        

        connection.query(sqlQuery, (error, results) => {
            if (error) {
                console.error('Error: ' + error.message);
                res.status(401).send({
                    success: false,
                    message: error.message,
                  });
                return;
            }
            console.log('data:', results);
            res.status(200).send({
                success: true,
                message: "succefully extracted user rank data",
                results,
              });
        });
     
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error",
        error,
      });
    }
  };