import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FotosPageRoutingModule } from "./fotos-routing.module";

import { FotosPage } from "./fotos.page";
import { AuthImgPipe } from "../../../auth-img.pipe";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FotosPageRoutingModule],
  declarations: [FotosPage, AuthImgPipe],
})
export class FotosPageModule {}
