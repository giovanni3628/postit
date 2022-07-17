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

  public isLoading: boolean = false;

  public login(): void {
    this.isLoading = true;
    console.log(this.loginPayload);
  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailISValid = regex.test(this.loginPayload.email)

    if(this.loginPayload.email.length >= 6&& this.loginPayload.password.length >= 6)
      return true;

    return false;

  }

  ngOnInit() {
  }

}
