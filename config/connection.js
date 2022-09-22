// Set up MySQL connection.
const mysql = require('mysql2');


// use this wrapper to create promise around mysql
class Database {
  constructor( config ) {
      this.connection = mysql.createConnection( 
          process.env.ROACHDB_URL ? process.env.ROACHDB_URL : config );
  }
  query( sql, args=[] ) {
      return new Promise( ( resolve, reject ) => {
          this.connection.query( sql, args, ( err, rows ) => {
              if ( err )
                  return reject( err );
              resolve( rows );
          } );
      } );
  }
  close() {
      return new Promise( ( resolve, reject ) => {
          this.connection.end( err => {
              if ( err )
                  return reject( err );
              resolve();
          } );
      } );
  }
}




function dbConnect( dbName, dbPassword ){
    // at top INIT DB connection
    const db = new Database({
        host: "localhost",
        port: 3306,
        user: "root",
        /*! please fill in your password; then create the database name below and create the table */
        password: dbPassword,
        database: dbName
    })
    return db
}







// const connection=mysql.createConnection(process.env.JAWSDB_URL)








// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   // NOTE: Be sure to add your MySQL password here!
//   password: 'November77',
//   database: 'burgers_db',
// });

// Make connection.
// connection.connect((err) => {
//   if (err) {
//     console.error(`error connecting: ${err.stack}`);
//     return;
//   }
//   console.log(`connected as id ${connection.threadId}`);
// });

// Export connection for our ORM to use.
// module.exports = connection;

module.exports = dbConnect;
