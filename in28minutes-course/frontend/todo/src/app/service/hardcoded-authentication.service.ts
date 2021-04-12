import { Injectable } from '@angular/core';

// Make this component injectable inside the Login Component Constructor
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  // Method to authenticate username and password (hardcoded)
  authenticate(username, password) {
    if (username === "admin" && password === "admin") {
      return true;
    }
    return false;
  }

}
