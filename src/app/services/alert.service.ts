import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alert: AlertController) { }



   public async showSucess(){
   const show = await this.alert.create({
    header: 'operação realizado com sucesso!',
    buttons: [{text: 'OK', handler: () => { 
      show.dismiss();
    } }
  ],
    });
    show.present();
  }


  public async showMsg(msg:string){
    const show = await this.alert.create({
     header: msg,
     buttons: [{text: 'OK', handler: () => { 
       show.dismiss();
     } }
   ],
     });
     show.present();
   }


  public async showConfirm() {
    const show = await this.alert.create({
     header: 'Deseja realizar essa operação?',
     buttons: [
     {
       text: 'SIM', handler: () => { 
       show.dismiss(true);
       return false;
       }
     },

     {
      text: 'Não', handler: () => { 
        show.dismiss(false);
        return false;
      }
    },

   ],
     });
  return await show;

   }
 


}
