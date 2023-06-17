import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloInicialComponent } from './titulo-inicial.component';

describe('TituloInicialComponent', () => {
  let component: TituloInicialComponent;
  let fixture: ComponentFixture<TituloInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloInicialComponent]
    });
    fixture = TestBed.createComponent(TituloInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
