import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificacionComponent } from './edificacion.component';

describe('EdificacionComponent', () => {
  let component: EdificacionComponent;
  let fixture: ComponentFixture<EdificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdificacionComponent]
    });
    fixture = TestBed.createComponent(EdificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
