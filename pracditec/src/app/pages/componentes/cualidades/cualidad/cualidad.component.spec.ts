import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CualidadComponent } from './cualidad.component';

describe('CualidadComponent', () => {
  let component: CualidadComponent;
  let fixture: ComponentFixture<CualidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CualidadComponent]
    });
    fixture = TestBed.createComponent(CualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
