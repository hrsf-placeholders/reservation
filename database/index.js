const mysql = require('mysql');
const Promise = require('bluebird');



const connection = mysql.createConnection({
  host: '172.17.0.2',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'reservations'
});

// hard-coded data for now
// refactor when live-data is used
const getTimes = () => {
  return new Promise((resolve, reject) => {
    connection.query(`select reserved.time from reserved, restaurants 
      where restaurants.id=95 and 
      reserved.rest_id = restaurants.id and  
      reserved.date = '2019-02-20'`, (err, results) => {
        if(err){
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

module.exports ={
  getTimes,
  connection
};