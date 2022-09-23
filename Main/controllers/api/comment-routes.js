const sql = require("mysql2");
const connection = sql.createConnection({
    host: 'localhost', 
    
    //port.
    port: 3001,

    //username:
    user: 'root',

    //password:
    password: '',
    database: 'employees',


});
connection.connect(function(err, connection) {
    if (err) throw err;
    console.log("connected as id " + connection.threadID);
    // console.log('table created: ' + connection.table.name);
   });
   
   module.exports = connection;