import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioambienteComponent } from './medioambiente.component';

describe('MedioambienteComponent', () => {
  let component: MedioambienteComponent;
  let fixture: ComponentFixture<MedioambienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedioambienteComponent]
    });
    fixture = TestBed.createComponent(MedioambienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
