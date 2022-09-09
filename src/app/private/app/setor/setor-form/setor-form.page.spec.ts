import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetorFormPage } from './setor-form.page';

describe('SetorFormPage', () => {
  let component: SetorFormPage;
  let fixture: ComponentFixture<SetorFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetorFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
