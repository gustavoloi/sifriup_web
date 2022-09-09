import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { IonicModule } from '@ionic/angular';
import { PrivateComponent } from './private.component';



@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    IonicModule,
    PrivateRoutingModule,   
  ]
})
export class PrivateModule { }
