import { Component, OnInit } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Platform } from "@ionic/angular";
@Component({
  selector: "app-root",
  styleUrls: ["app.style.scss"],
  template: `
    <ion-app>
      <ion-menu contentId="content1" side="start">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Gerenciador de imagens</ion-list-header>
            <ion-note>Menu</ion-note>
            <ion-menu-toggle auto-hide="false" *ngFor="let p of appPages; let i = index">
              <ion-item
                (click)="selectedIndex = i"
                routerDirection="root"
                [routerLink]="[p.url]"
                lines="none"
                detail="false"
                [class.selected]="selectedIndex == i"
              >
                <ion-icon slot="start" [ios]="p.icon + '-outline'" [md]="p.icon + '-sharp'"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="content1" main></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Home",
      url: "/app/dashboard",
      icon: "home",
    },
    {
      title: "Usuário",
      url: "/app/usuario",
      icon: "person",
    },
    {
      title: "Setor",
      url: "/app/setor",
      icon: "people",
    },
    {
      title: "Fotos",
      url: "/app/fotos",
      icon: "camera",
    },
    {
      title: "Configurações",
      url: "/app/entrega",
      icon: "settings",
    },
  ];
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}
}
