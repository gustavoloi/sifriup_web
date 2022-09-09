import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { GenericService } from 'src/app/services/generic/generic.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.page.html',
  styleUrls: ['./usuario-form.page.scss'],
})
export class UsuarioFormPage implements OnInit {

  usuarioForm:any = {};

  setores: any = [];

  constructor(private service: GenericService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alert: AlertService) { }

  ngOnInit() {
    this.service.get('setor').subscribe(result => {
      this.setores = result;
    });

    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.service.get(`usuario/${id}`)
      .subscribe(result => {
          this.usuarioForm = result;
      });

    }
  }


  async delete(submit:any) {
    let alert = await this.alert.showConfirm();
    alert.present();
    const confirm = (await alert.onDidDismiss()).data;
    if(confirm){
      this.service.delete(`usuario/${this.usuarioForm.id}`)
      .subscribe(async result => {
        this.router.navigate(['/app/usuario']);
      });
    }
  }


  submit(form:any) {

    const selectSetor = this.setores
    .find(setor => setor.id === this.usuarioForm.setorId);
    this.usuarioForm.setorNome = selectSetor.nome;

    if(this.usuarioForm.id){
      this.service.put(`usuario/${this.usuarioForm.id}`, this.usuarioForm).subscribe(result => {  
        this.router.navigate(['/app/usuario']);
      });  
    }else{
      
      if(!this.passwordNotEquals()){
        this.service.post('usuario', this.usuarioForm).subscribe(result => {  
          this.router.navigate(['/app/usuario']);
        });        
      }else{
        this.alert.showMsg("Verifique as senhas");
      }
 
    }
  }

  passwordNotEquals(){
    return this.usuarioForm.confirmarSenha !== this.usuarioForm.senha;
  }
  clearForm() {
    this.usuarioForm = {};
  }
}
