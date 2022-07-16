import { Component, OnInit } from '@angular/core';
import { LoginPayload } from 'src/app/models/payloads/login.payload';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }
  public login(): void {
    console.log(this.loginPayload);
  }

  ngOnInit() {
  }

}
