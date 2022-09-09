import { ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic/generic.service';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.page.html',
  styleUrls: ['./setor.page.scss'],
})
export class SetorPage implements OnInit {



  setores: any = [];
  searchValue = "";



  constructor(private router: Router,
    private service: GenericService) { }


    ionViewWillEnter() {
    this.load();
  }


  ngOnInit() {
    this.load();
  }

  adicionar() {
    this.router.navigate(['/app/setor/setor-form']);
  }

  load() {
    this.setores = this.service.get('setor');
  }

  selectSetor(id: any) {
    this.router.navigate([`/app/setor/setor-form/${id}`]);
  }

  search() {
    this.setores = this.service.get(`setor/search/nome/?value=${this.searchValue}`);
  }
}
