import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payloads/login.payload';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private readonly toastController : ToastController,
    private readonly alertController : AlertController,
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false;

  public async login(): Promise<void> {
    this.isLoading = true;

   const toast = await this.toastController.create({
      message: 'Logando...',
      duration: 2000 // 2s
    })
    toast.present();

   const alert =  await this.alertController.create({
      header: 'Hello World',
      buttons: [
        {
          text: 'OK',
          handler: () => {console.log('OK!')}
        }
      ]
    })
    alert.present();
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
