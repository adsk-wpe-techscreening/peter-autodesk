/**
 * This class provides API for User Recommendations.
 *
 */
class UserAPIRecommendationImplentation {
  /**
   * Get User Recommendations
   *
   * @param userId
   * @return List<UserRecommendation>
   */
  getUserRecommendation(userId, callback) {
    userRecommendationList = new Array();

    const GET_BOOKS = "select book_title,isbn_number,genre_id,author_id from books where available=1 and " \
            + "book_id in (select distinct book_id from user_interests where user_id=?)"; 
    const GET_AUTHOR_NAME = "select author_name from authors where author_id=?";
    const GET_GENRE_NAME = "select genre_name from genres where genre_id=?";

    const conn = getConnection();
    let values = [userId];

    conn.query(GET_BOOKS, values, function(err, result) {
      result.forEach(item =>{
        const userRecommendation = new UserRecommendation();
        userRecommendation.setIsbnNumber(item["isbn_title"]);
        userRecommendation.setBookTitle(item["book_title"]);
        const authorId = item["author_id"];
        // Retreive Author name from Database
        values = [authorId];
        conn.query(GET_AUTHOR_NAME, [authorId], function(err, result) {
          userRecommendation.setAuthorName(result["author_name"]);
          // Retreive Genre name from Database
          genrePreparedStatement.setInt(1, booksResultSet.getInt("genre_id"));
          const genreId = item["genre_id"];
          conn.query(GET_GENRE_NAME, [genreId], function(err, result) {
            userRecommendation.setGenreName(result["genre_name"]);
            userRecommendationList.push(userRecommendation);
            callback(userRecommendationList);
          });
        });
      });
    });
  }

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

module.export = UserAPIRecommendationImplentation;
