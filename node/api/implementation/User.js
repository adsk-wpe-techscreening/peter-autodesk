class User {

  constructor() {
    this.firstName;
    this.lastName;
    this.email;
    this.phone;
    this.userId;
    this.profilePhotoUrl;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getPhone() {
    return this.phone;
  }

  setPhone(phone) {
    this.phone = phone;
  }

  getProfilePhotoUrl() {
    return this.profilePhotoUrl;
  }

  setProfilePhotoUrl(profilePhotoUrl) {
    this.profilePhotoUrl = profilePhotoUrl;
  }
}

module.export = User;
