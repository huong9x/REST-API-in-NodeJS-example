require('dotenv').config({ path: '.env'});

module.exports = {
  client: process.env.DB_CLIENT || 'mysql',
  connection: {
      charset  : 'utf8',
      dateString : true,
      host: process.env.MYSQL_HOST ,
      user: process.env.MYSQL_USER ,
      password: process.env.MYSQL_PASSWORD ,
      database: process.env.MYSQL_DATABASE 
      
  },
  pool: {
      min: 2,
      max: 10,
      afterCreate: function(conn, cb) {
        conn.query('SET sql_mode="NO_ENGINE_SUBSTITUTION";', function (err) {
          cb(err, conn);
        });
      }
  },
  migrations: {
      directory: __dirname + '/database/migrations/',
      tableName: 'migrations'
  },
  seeds: {
      directory: __dirname + '/database/seeds'
  }
};