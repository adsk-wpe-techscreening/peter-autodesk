const mysql = require('mysql');
const logger = require('morgan');

class UserAPIImplementation {
  constructor() {

  }

  /**
   * Insert a new User
   * 
   * @param user - A user object
   * @param callback with userId
   */
  static insertUser(user, callback) {
    // for insert a new User
    let userResultSet = null;
    let userId = 0;

    const INSERT_USER = "INSERT INTO users(user_id,first_name,last_name,email,phone,profile_photo_url) VALUES ?";
    try {
      const conn = this.getConnection();
      let values = [user.getFirstName(), user.getLastName(), user.getEmail(), user.getPhone(), user.getProfilePhotoUrl()];

      conn.query(INSERT_USER, values, function(err, result) {
        userId = result.insertId;
        callback(null, userId);
      });
    } catch (err) {
      callback(err);
      logger.debug("Error while adding user", err);
    } 
  }
 
  /**
   * Get Database Connection
   *
   */
  getConnection() {
    var connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3006,
      user     : 'name',
      password : 'password',
      database : 'recommendation'
    });
 
    connection.connect();

    return connection;
  }

}

module.export = UserAPIImplementation;
