import { Injectable } from '@angular/core';

// This Service is used in compnents that require login. (Login, Logout, Menu components)
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  // Method to authenticate username and password (hardcoded)
  authenticate(username, password) {

    // If credentials match, then add user to session storage
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  // Check if user is logged-in by checking session storage
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  // Logs user out by removing from session storage
  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
