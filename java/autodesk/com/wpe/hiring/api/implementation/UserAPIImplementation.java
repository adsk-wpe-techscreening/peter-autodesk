package autodesk.com.wpe.hiring.api.implementation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserAPIImplementation {

  private static final Logger logger = LoggerFactory.getLogger(UserAPIImplementation.class);

  /**
   * Insert a new User
   * 
   * @param firstName
   * @param lastName
   * @param email
   * @param profile_photo_url
   * @param phone
   * @return int userId
   */
  public int insertUser(User user) throws Exception {
    // for insert a new User
    ResultSet userResultSet = null;
    int userId = 0;

    String INSERT_USER =
        "INSERT INTO users(user_id,first_name,last_name,email,phone,profile_photo_url) "
            + "VALUES(?,?,?,?,?,?)";
    try {
      Connection conn = getConnection();
      PreparedStatement userPreparedStatement =
          conn.prepareStatement(INSERT_USER, Statement.RETURN_GENERATED_KEYS);
      // set parameters for statement
      userPreparedStatement.setInt(1, user.getUserId());
      userPreparedStatement.setString(2, user.getFirstName());
      userPreparedStatement.setString(3, user.getLastName());
      userPreparedStatement.setString(4, user.getEmail());
      userPreparedStatement.setString(5, user.getPhone());
      userPreparedStatement.setString(6, user.getProfilePhotoUrl());
      int rowAdded = userPreparedStatement.executeUpdate();
      if (rowAdded == 1) {
        // get user id
        userResultSet = userPreparedStatement.getGeneratedKeys();
        if (userResultSet.next())
          userId = userResultSet.getInt(1);

      }
    } catch (SQLException ex) {
      logger.debug("Error while adding user", ex.getMessage());
    } catch (Exception ex) {
      logger.debug("Error while adding user", ex.getMessage());
    } finally {
      try {
        if (userResultSet != null)
          userResultSet.close();
      } catch (SQLException ex) {
        logger.debug("Error while adding user", ex.getMessage());
      }
    }

    return userId;
  }

  /**
   * Insert a new User
   * 
   * @param firstName
   * @param lastName
   * @param email
   * @param profile_photo_url
   * @param phone
   * @return int userId
   */
  public int insertNewUserWith(User user) throws Exception {
    // for insert a new User
    ResultSet userResultSet = null;
    int userId = 0;

    String INSERT_USER =
        "INSERT INTO users(user_id,first_name,last_name,email,phone,profile_photo_url) "
            + "VALUES('" + user.getUserId() + "','" + user.getFirstName() + "','"
            + user.getLastName() + "'," + "'" + user.getEmail() + "','" + user.getPhone() + "','"
            + user.getProfilePhotoUrl() + "')";
    try {
      Connection conn = getConnection();
      Statement statement = conn.createStatement();
      PreparedStatement userStatement =
          conn.prepareStatement(INSERT_USER, Statement.RETURN_GENERATED_KEYS);
      int rowAdded = userStatement.executeUpdate();
      if (rowAdded == 1) {
        // get user id
        userResultSet = userStatement.getGeneratedKeys();
        if (userResultSet.next())
          userId = userResultSet.getInt(1);

      }
    } catch (SQLException ex) {
      logger.debug("Error while adding user", ex.getMessage());
    } catch (Exception ex) {
      logger.debug("Error while adding user", ex.getMessage());
    } finally {
      try {
        if (userResultSet != null)
          userResultSet.close();
      } catch (SQLException ex) {
        logger.debug("Error while adding user", ex.getMessage());
      }
    }

    return userId;
  }

  protected Connection getConnection() throws Exception {
    String driver = "com.mysql.jdbc.Driver";
    String url = "jdbc:mysql://localhost:3306/recommendation";
    String username = "name";
    String password = "password";
    Class.forName(driver);
    Connection conn = DriverManager.getConnection(url, username, password);
    return conn;
  }

  /*
   * Jdbc connection Prepared Statement bind the user input method parameters Parse the resultset
   * send the response json and response code.
   */



}
