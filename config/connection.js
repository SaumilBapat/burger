// Set up MySQL connection.
var mysql = require("mysql");

process.env.DATABASE_URL =
  "mysql://ytlnm1pic2wl2yuc:d68pg1lhqqgm5br0@uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/niptxhlh63wz1q1i";
const connectionString =
  process.env.DATABASE_URL || "mysql://root:localhost:3306/burgers_db";

if (process.env.DATABASE_URL) {
  connection = mysql.createConnection(connectionString);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hoginogi",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
