import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GenericService } from '../../../services/generic/generic.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {
  fotos: any = [];
  setores: any = [];

  currentDate = new Date().getFullYear();
  currentDateMin = 2020;
  selectDate = new Date().toISOString();
  setorId = '';

  constructor(private service: GenericService) { }

  ngOnInit() {
    this.setores = this.service.get(`setor`);
    this.fotos = this.service.get(`foto/setor?setorId=${this.setorId}&selectDate=${this.selectDate}`);
  }

  getFoto(id) {
    return `file/inline/${id}`;
  }

  filtrarSetor() {
    this.fotos = this.service.get(`foto/setor?setorId=${this.setorId}&selectDate=${this.selectDate}`);
  }
}
