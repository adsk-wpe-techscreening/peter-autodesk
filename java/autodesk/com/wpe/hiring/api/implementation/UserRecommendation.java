package autodesk.com.wpe.hiring.api.implementation;

public class UserRecommendation {

  String userId;
  String bookTitle;
  String isbnNumber;
  String authorName;
  String genreName;

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public String getBookTitle() {
    return bookTitle;
  }

  public void setBookTitle(String bookTitle) {
    this.bookTitle = bookTitle;
  }

  public String getIsbnNumber() {
    return isbnNumber;
  }

  public void setIsbnNumber(String isbnNumber) {
    this.isbnNumber = isbnNumber;
  }

  public String getAuthorName() {
    return authorName;
  }

  public void setAuthorName(String authorName) {
    this.authorName = authorName;
  }

  public String getGenreName() {
    return genreName;
  }

  public void setGenreName(String genreName) {
    this.genreName = genreName;
  }


}
