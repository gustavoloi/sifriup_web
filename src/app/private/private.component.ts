import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication/authentication.service";

@Component({
  selector: "app-private",
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Gerenciador de imagens</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button color="primary" autoHide="false"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button (click)="logOut()">
            <ion-icon color="primary" ios="log-out-outline" md="log-out-outline"> Sair </ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  `,
})
export class PrivateComponent implements OnInit {
  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit() {}

  logOut() {
    this.auth.deleteToken();
    this.router.navigate(["/login"]);
  }
}
