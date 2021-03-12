// Set up MySQL connection.
const mysql = require('mysql');


// use this wrapper to create promise around mysql
class Database {
  constructor( config ) {
      this.connection = mysql.createConnection( 
          process.env.JAWSDB_URL ? process.env.JAWSDB_URL : config );
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




const connection = mysql.createConnection({
  host: 'lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'sq6xs4lkvwvjfd1u',
  // NOTE: Be sure to add your MySQL password here!
  password: 'kqo6swq8l1q4b0ce',
  database: 'nbzgr48so0c0z9jj',
});

// // Make connection.
// connection.connect((err) => {
//   if (err) {
//     console.error(`error connecting: ${err.stack}`);
//     return;
//   }
//   console.log(`connected as id ${connection.threadId}`);
// });

// Export connection for our ORM to use.
module.exports = connection;
