// singletons/userRegistration.js
class UserRegistration {
    constructor() {
      if (UserRegistration.instance) {
        return UserRegistration.instance;
      }
      this.users = [];
      UserRegistration.instance = this;
    }
  
    registerUser(username, password) {
      const user = { username, password };
      this.users.push(user);
      console.log(`User ${username} registered successfully.`);
    }
  
    getUsers() {
      return this.users;
    }
}

const instance = new UserRegistration();
Object.freeze(instance);

module.exports = instance;
  