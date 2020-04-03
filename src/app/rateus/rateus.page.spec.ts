import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateusPage } from './rateus.page';

describe('RateusPage', () => {
  let component: RateusPage;
  let fixture: ComponentFixture<RateusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
