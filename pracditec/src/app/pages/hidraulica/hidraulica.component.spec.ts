import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidraulicaComponent } from './hidraulica.component';

describe('HidraulicaComponent', () => {
  let component: HidraulicaComponent;
  let fixture: ComponentFixture<HidraulicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HidraulicaComponent]
    });
    fixture = TestBed.createComponent(HidraulicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
