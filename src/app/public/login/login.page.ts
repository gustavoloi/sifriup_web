import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { GenericService } from 'src/app/services/generic/generic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = '';
  senha = '';
  constructor(private router: Router, private service: GenericService, private auth: AuthenticationService, private alert: AlertService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  loginSubmit() {
    this.service.post('auth/token', { login: this.login, senha: this.senha }).subscribe(
      (result) => {
        this.auth.setToken(JSON.stringify(result.data), false);
        this.router.navigateByUrl('/app');
      },
      (error) => {
        if (error.status === 404) {
          this.alert.showMsg('Login inválido');
        } else if (error.status === 406) {
          this.alert.showMsg('Usuário bloqueado ou acesso não permitido!');
        } else {
          this.alert.showMsg(error.message);
        }
      }
    );
  }
}
