import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { GenericService } from 'src/app/services/generic/generic.service';

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.page.html',
  styleUrls: ['./setor-form.page.scss'],
})
export class SetorFormPage implements OnInit {

  setorForm: any = {};
  constructor(private service: GenericService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alert: AlertService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.service.get(`setor/${id}`)
        .subscribe(result => {
          this.setorForm = result;
        });

    }
  }

  async delete(submit: any) {
    const alert = await this.alert.showConfirm();
    alert.present();
    const confirm = (await alert.onDidDismiss()).data;
    if (confirm) {
      this.service.delete(`setor/${this.setorForm.id}`)
        .subscribe(async result => {
          this.router.navigate(['/app/setor']);
        });
    }
  }

  valideQuality(event) {
    console.log(event.value);
    if (event.value > 100)
      return false;
    if (event.value < 10)
      return false;
    return true;
  }

  submit(submit: any) {
    if (this.setorForm.id) {
      this.service.put(`setor/${this.setorForm.id}`, this.setorForm).subscribe(async () => {
        this.router.navigate(['/app/setor']);
      });
    } else {
      this.service.post('setor', this.setorForm).subscribe(async () => {
        this.router.navigate(['/app/setor']);
      });
    }
  }
}
