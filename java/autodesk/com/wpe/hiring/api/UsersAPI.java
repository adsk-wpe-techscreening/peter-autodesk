package autodesk.com.wpe.hiring.api;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import autodesk.com.wpe.hiring.api.implementation.User;
import autodesk.com.wpe.hiring.api.implementation.UserAPIImplementation;
import autodesk.com.wpe.hiring.api.implementation.UserAPIRecommendationImplentation;
import autodesk.com.wpe.hiring.api.implementation.UserRecommendation;



public class UsersAPI {

    private static final Logger logger =
      LoggerFactory.getLogger(UserAPIRecommendationImplentation.class);

    @Inject
    private UserAPIImplementation userAPIImplementation;

    @Inject
    private UserAPIRecommendationImplentation userAPIRecommendationImplementation;

    /**
     *  To enable Get Recommendations API Endpoint
     * @param userId
     * @return Response JSON with an array of recommendation objects
     */
	@GET
    @Path("users/{userid}/recommendations")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUserRecommendations(int userId) {
	  Response response = null;
	  List<UserRecommendation> listOfUserRecommendations = null;
      try {
        listOfUserRecommendations = userAPIRecommendationImplementation.getUserRecommendation(userId);
        // Sorting logic invoked below. Sort the list by authorName  and then followed by bookTitle.
        this.sortUserRecommendationsList(listOfUserRecommendations);
        response = Response.status(Response.Status.OK).entity(listOfUserRecommendations)
            .build();
      } catch(Exception ex) {
        logger.debug("Error while getting Recommendations",ex.getMessage());
      }
      return response;

    }

	/**
     * To Enable Create User API Endpoint
     * @return Response Response status
     */
	@POST
	@Path("/users")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addUser(User user) {
	  Response response = null;
	  try {
	       userAPIImplementation.insertUser(user);
		     String result = "User saved : " + user;
		     response= Response.status(201).entity(result).build();
	  } catch(Exception ex) {
	    logger.debug("Error while adding User",ex.getMessage());
	  }
	  return response;
	}
  /**
     * Method to recieve UserRecommendation<List>
     * Sort User Recommendation List by 2 fields (Author_name and book_title)
     * Void response. Sorting is done in-place.
     */
	public void sortUserRecommendationsList(List<UserRecommendation> list) {
	  Comparator<UserRecommendation> compareByName = Comparator
          .comparing(UserRecommendation::getAuthorName)
          .thenComparing(UserRecommendation::getBookTitle);

	  Collections.sort(list, compareByName);
	}


}
