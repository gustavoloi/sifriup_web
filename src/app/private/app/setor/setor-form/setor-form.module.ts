import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetorFormPageRoutingModule } from './setor-form-routing.module';

import { SetorFormPage } from './setor-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetorFormPageRoutingModule
  ],
  declarations: [SetorFormPage]
})
export class SetorFormPageModule {}
