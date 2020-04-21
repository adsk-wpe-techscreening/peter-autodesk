const logger = require('morgan');
const User = require('./implementation/User');
const UserAPIImplementation = require('./implementation/UserAPIImplementation');
const UserRecommendation = require('./implementation/UserRecommendation');
const UserAPIRecommendationImplentation = require('./implementation/UserAPIRecommendationImplementation');

class UsersAPI {

  /**
   *  To enable Get Recommendations API Endpoint
   * @param userId
   * @param response object to return the response and status
   */
  static getUserRecommendations(userId, response) {
    try {
       UserAPIRecommendationImplentation.getUserRecommendation(userId, (err, listOfUserRecommendations) => {
         listOfUserRecommendations.sort(sortUserRecommendationsList);
         response.status(200).send(listOfUserRecommendations);
      });
    } catch(err) {
      logger.debug("Error while getting Recommendations", err);
    }
  }

  /**
   * To Enable Create User API Endpoint
   * @param user object to be added
   * @param response object to return the response and status
   */
  static addUser(user, response) {
    try {
      userAPIImplementation.insertUser(user, (err, userId) => {
        const result = "User saved, userId : " + userId;
        response.status(201).send(result);
      });
    } catch(err) {
      logger.debug("Error while adding User", err);
    }
  }
  
  /**
   * Method to sort user recommendation list array
   * Sort User Recommendation List by 2 fields (Author_name and book_title)
   */
  sortUserRecommendationsList(a, b) {
    if (a.authorName > b.authorName) {
      return 1;
    }
    if (a.authorName < b.authorName) {
      return -1;
    }
    if (a.bookTitle > b.bookTitle) {
      return 1;
    } 
    if (a.bookTitle < b.bookTitle) {
      return -1;
    } 
    return 0;
  }

}



module.export = UsersAPI;
