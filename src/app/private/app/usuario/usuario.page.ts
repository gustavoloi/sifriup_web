import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic/generic.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {


usuarios: any = [];
searchValue = "";

  constructor(private router: Router,
              private service: GenericService) { }

  ngOnInit() {
    this.load();
  }

  ionViewWillEnter() {
    this.load();
  }
  adicionar(){
    this.router.navigate(['/app/usuario/usuario-form']);
  }



  selectSetor(id: any) {
    this.router.navigate([`/app/usuario/usuario-form/${id}`]);
  }

  load(){
    this.usuarios = this.service.get('usuario');
  }

  search() {
    this.usuarios = this.service.get(`usuario/search/nome/?value=${this.searchValue}`);
  }
}
