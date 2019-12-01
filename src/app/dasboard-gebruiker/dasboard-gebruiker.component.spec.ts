import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardGebruikerComponent } from './dasboard-gebruiker.component';

describe('DasboardGebruikerComponent', () => {
  let component: DasboardGebruikerComponent;
  let fixture: ComponentFixture<DasboardGebruikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardGebruikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardGebruikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
