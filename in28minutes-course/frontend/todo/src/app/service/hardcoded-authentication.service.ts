import { Injectable } from '@angular/core';

// Make this component injectable inside the Login Component Constructor
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  // Method to authenticate username and password (hardcoded)
  authenticate(username, password) {

    console.log(this.isUserLoggedIn);

    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }


  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
