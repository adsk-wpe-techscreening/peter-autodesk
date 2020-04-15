const User = require('./implementation/User');
const UserAPIImplementation = require('./implementation/UserAPIImplementation');
const UserRecommendation = require('./implementation/UserRecommendation');
// const UserAPIRecommendationImplentation = require('./implementation/UserAPIRecommendationImplementation');

class UsersAPI {

  /**
   *  To enable Get Recommendations API Endpoint
   * @param userId
   * @return Response JSON with an array of recommendation objects
   */
  getUserRecommendations(userId, callback) {
    try {
      // listOfUserRecommendations = UserAPIRecommendationImplentation.getUserRecommendation(userId);
      // Sorting logic invoked below. Sort the list by authorName  and then followed by bookTitle.
      this.sortUserRecommendationsList(listOfUserRecommendations);
      response = Response.status(Response.Status.OK).entity(listOfUserRecommendations)
        .build();
    } catch(ex) {
      logger.debug("Error while getting Recommendations",ex.getMessage());
    }
    return response;

  }

  /**
   * To Enable Create User API Endpoint
   * @return Response Response status
   */
  addUser(user, callback) {
    try {
      userAPIImplementation.insertUser(user);
      const result = "User saved : " + user;
      response= Response.status(201).entity(result).build();
    } catch(ex) {
      logger.debug("Error while adding User",ex.getMessage());
    }
    return response;
  }
  /**
   * Method to recieve UserRecommendation<List>
   * Sort User Recommendation List by 2 fields (Author_name and book_title)
   * Void response. Sorting is done in-place.
   */
  sortUserRecommendationsList(list) {
  }


}


module.export = UsersAPI;
