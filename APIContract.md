
Book Recommendations Application for the Scranton Library.

**Resources**

**API 1: Create User**
  **URL** - https://api.some-domain.com/users
  **METHOD** = POST
  **Request** -
  {
    userId : 1,
    firstName : "Ryan",
    lastName: "Howard",
    email:ryanhoward@testmail.com",
    Phone:1231231234,
    profilePhotoUrl:https://images.some-domain.com/ryan_howard.png
  }

  **Example HTTP Response** -
  HTTP/1.1 200 Created
  Location: https://api.some-domain.com/users
  Content-Type: application/json;charset=UTF-8



**API 2: Get Reccomendations**
   **URL** - https://api.some-domain.com/library-services/users/{userId}/recommendations
   **METHOD** = GET
   **Example HTTP Response** -
    HTTP/1.1 200 OK
    Content-Type: application/json;charset=UTF-8

    [
      {
      "bookTitle:"Somehow I Manage",
      "isbnNumber": "AB12345678",
      "authorName":"Michael Scott",
      "genreName:"Management"
      },
      {
      "bookTitle:"Acapella at Yale",
      "isbnNumber": "CD12345678",
      "authorName":"Andrew Bernard",
      "genreName:"Music"
      },
      {
      "bookTitle:"Things I learned as a state senator",
      "isbnNumber": "EF12345678",
      "authorName":"Oscar Martinez",
      "genreName:"Politics"
      },
      {
      "bookTitle:"The Ultimate Guide to Throwing a Garden Party",
      "isbnNumber": "DE12345678",
      "authorName":"Jim Halpert",
      "genreName:"Living"
      }  
   ]
