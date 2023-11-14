/**
 * Filename: complexCode.js
 * Content: Complex and elaborate JavaScript code example
 *
 * Description:
 * This code demonstrates a complex implementation of a user management system. It allows users to register, login, and perform various actions such as updating their profile, uploading avatars, and sending messages to other users.
 *
 * Note:
 * This code is provided as an example and may not be functional as-is. It is intended to showcase complex concepts and may require additional setup, configurations, or modifications to work in a specific environment.
 */

// User class representing a user in the system
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = null;
  }

  updateProfile(newName) {
    this.name = newName;
  }

  uploadAvatar(avatarImage) {
    this.avatar = avatarImage;
  }

  sendMessage(receiver, message) {
    console.log(`Sending message to ${receiver}: ${message}`);
  }
}

// User management class to handle registration, login, and user interactions
class UserManager {
  constructor() {
    this.users = [];
    this.currentUser = null;
  }

  registerUser(name, email, password) {
    const newUser = new User(name, email, password);
    this.users.push(newUser);
    console.log(`New user registered: ${newUser.name}`);
  }

  loginUser(email, password) {
    const foundUser = this.users.find((user) => user.email === email && user.password === password);
    if (foundUser) {
      this.currentUser = foundUser;
      console.log(`User ${this.currentUser.name} logged in successfully.`);
    } else {
      console.log('Invalid email or password.');
    }
  }

  logoutUser() {
    if (this.currentUser) {
      console.log(`User ${this.currentUser.name} logged out.`);
      this.currentUser = null;
    } else {
      console.log('No user currently logged in.');
    }
  }

  updateProfile(newName) {
    if (this.currentUser) {
      this.currentUser.updateProfile(newName);
      console.log(`Profile updated. New name: ${this.currentUser.name}`);
    } else {
      console.log('Please log in first.');
    }
  }

  uploadAvatar(avatarImage) {
    if (this.currentUser) {
      this.currentUser.uploadAvatar(avatarImage);
      console.log('Avatar uploaded successfully.');
    } else {
      console.log('Please log in first.');
    }
  }

  sendMessage(receiverEmail, message) {
    if (this.currentUser) {
      const receiver = this.users.find((user) => user.email === receiverEmail);
      if (receiver) {
        this.currentUser.sendMessage(receiver.name, message);
      } else {
        console.log('Receiver not found. Message sending failed.');
      }
    } else {
      console.log('Please log in first.');
    }
  }
}

// Usage example
const userManager = new UserManager();

userManager.registerUser('Alice', 'alice@example.com', 'password123');
userManager.registerUser('Bob', 'bob@example.com', '876pass');

userManager.loginUser('alice@example.com', 'password123');

userManager.updateProfile('Alice Smith');
userManager.uploadAvatar('avatar.jpg');
userManager.sendMessage('bob@example.com', 'Hello Bob!');

userManager.logoutUser();