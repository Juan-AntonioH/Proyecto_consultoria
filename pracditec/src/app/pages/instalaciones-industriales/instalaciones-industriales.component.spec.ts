import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesIndustrialesComponent } from './instalaciones-industriales.component';

describe('InstalacionesIndustrialesComponent', () => {
  let component: InstalacionesIndustrialesComponent;
  let fixture: ComponentFixture<InstalacionesIndustrialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstalacionesIndustrialesComponent]
    });
    fixture = TestBed.createComponent(InstalacionesIndustrialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
