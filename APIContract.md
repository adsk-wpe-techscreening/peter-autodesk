
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



**API 2: Get Reccomendations**
   **URL** - https://api.some-domain.com/library-services/users/{userId}/recommendations
   **METHOD** = GET
