import { Component, OnInit } from '@angular/core';
import {  AlertController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { helperService } from 'src/app/services/helpers.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private readonly helper: helperService,
    private readonly alertController : AlertController,
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false;

  public async login(): Promise<void> {
    if(!this.canLogin())
    return;
    
    this.isLoading = true;

   //toast
  await this.helper.showToast('Carregando..');

   //alert 
  await this.helper.showAlert('Hello World!', [
     {
       text: 'OK!',
       handler: () => console.log("OkK!!")
     },
     {
       text: 'outro!',
       handler: () => console.log("OkK!!")
     }
   ])

    console.log(this.loginPayload);
  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailISValid = regex.test(this.loginPayload.email)

    if(this.loginPayload.email.length >= 6&& this.loginPayload.password.length >= 6)
      return true;

    return false;

  }

  public logoClick($event): void {
    console.log($event);

  }

  ngOnInit() {
  }

}
