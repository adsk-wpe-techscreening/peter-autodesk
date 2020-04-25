class UserRecommendation {

  constructor() {
    this.userId;
    this.bookTitle;
    this.isbnNumber;
    this.authorName;
    this.genreName;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  getBookTitle() {
    return this.bookTitle;
  }

  setBookTitle(bookTitle) {
    this.bookTitle = bookTitle;
  }

  getIsbnNumber() {
    return this.isbnNumber;
  }

  setIsbnNumber(isbnNumber) {
    this.isbnNumber = isbnNumber;
  }

  getAuthorName() {
    return this.authorName;
  }

  setAuthorName(authorName) {
    this.authorName = authorName;
  }

  getGenreName() {
    return this.genreName;
  }

  setGenreName(genreName) {
    this.genreName = genreName;
  }

}

module.export = UserRecommendation;
