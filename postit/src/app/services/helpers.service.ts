import { Injectable } from "@angular/core";

import { ToastController, AlertController, AlertButton } from '@ionic/angular';


@Injectable({
    providedIn: 'root',
})

export class helperService {
    constructor(
        private readonly toastController : ToastController,
        private readonly alertController : AlertController,
      ) { }
    // construtor
    //variaveis
    //funções

    public async showToast(message: string, duration: number = 2000): Promise<void> {
        const toast = await this.toastController.create({
            message: message,
            duration: duration
          })
          toast.present();
    }

    public async showAlert(header: string, buttons: (AlertButton | string)[]): Promise<void> {
        const alert =  await this.alertController.create({
            header: header,
            buttons,
            
          })
          alert.present();
        }
    }
