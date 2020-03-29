var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qeehg7bpewpezjav",
  password: "xp62gd9euk3mkrre",
  database: "y8r4b82wt6cq3grf"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
