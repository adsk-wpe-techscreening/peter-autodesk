package autodesk.com.wpe.hiring.api.implementation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * This class provides API for User Recommendations.
 *
 */
public class UserAPIRecommendationImplentation {
  private static final Logger logger =
      LoggerFactory.getLogger(UserAPIRecommendationImplentation.class);

  /**
   * Get User Recommendations
   *
   * @param userId
   * @return List<UserRecommendation>
   */
  public List<UserRecommendation> getUserRecommendation(int userId) throws Exception {

    String GET_BOOKS =
        "select book_title,isbn_number,genre_id,author_id from books where available=1 and "
            + "book_id in (select distinct book_id from user_interests where user_id=?)";
    String GET_AUTHOR_NAME = "select author_name from authors where author_id=?";
    String GET_GENRE_NAME = "select genre_name from genres where genre_id=?";

    List<UserRecommendation> userRecommendationList = new ArrayList<UserRecommendation>();

    ResultSet booksResultSet = null;
    ResultSet authorResultSet = null;
    ResultSet genreResultSet = null;
    try {
      Connection conn = getConnection();
      PreparedStatement booksPreparedStatement = conn.prepareStatement(GET_BOOKS);
      PreparedStatement authorPreparedStatement = conn.prepareStatement(GET_AUTHOR_NAME);
      PreparedStatement genrePreparedStatement = conn.prepareStatement(GET_GENRE_NAME);

      booksPreparedStatement.setInt(1, userId);
      booksResultSet = booksPreparedStatement.executeQuery();
      while (booksResultSet.next()) {

        UserRecommendation userRecommendation = new UserRecommendation();
        userRecommendation.setIsbnNumber(booksResultSet.getString("isbn_title"));
        userRecommendation.setBookTitle(booksResultSet.getString("book_title"));
        // Retreive Author name from Database
        authorPreparedStatement.setInt(1, booksResultSet.getInt("author_id"));
        authorResultSet = authorPreparedStatement.executeQuery();
        while (authorResultSet.next()) {
          userRecommendation.setAuthorName(authorResultSet.getString("author_name"));

        }
        // Retreive Genre name from Database
        genrePreparedStatement.setInt(1, booksResultSet.getInt("genre_id"));
        genreResultSet = genrePreparedStatement.executeQuery();
        while (genreResultSet.next()) {
          userRecommendation.setGenreName(genreResultSet.getString("genre_name"));

        }
        userRecommendationList.add(userRecommendation);
      }
    } catch (SQLException ex) {
      logger.debug("Error while getting recommendation", ex.getMessage());
      throw ex;
    } catch (Exception ex) {
      logger.debug("Error while getting recommendation", ex.getMessage());
      throw ex;
    } finally {
      try {
        if (booksResultSet != null)
          booksResultSet.close();
        if (authorResultSet != null)
          authorResultSet.close();
        if (genreResultSet != null)
          genreResultSet.close();
      } catch (SQLException ex) {
        logger.debug("Error while getting recommendation", ex.getMessage());
        throw ex;
      }
    }
    return userRecommendationList;
  }

  protected Connection getConnection() throws Exception {
    String driver = "com.mysql.jdbc.Driver";
    String url = "jdbc:mysql://localhost:3306/recommendation";
    String username = "dbname";
    String password = "password123";
    Class.forName(driver);
    Connection conn = DriverManager.getConnection(url, username, password);
    return conn;
  }
}
