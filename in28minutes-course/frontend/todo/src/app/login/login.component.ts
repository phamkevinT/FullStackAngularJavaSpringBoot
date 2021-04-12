import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  handleLogin() {

    if (this.username === "admin" && this.password === "admin") {
      // Redirect from Login to Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
