import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionServiciosComponent } from './distribucion-servicios.component';

describe('DistribucionServiciosComponent', () => {
  let component: DistribucionServiciosComponent;
  let fixture: ComponentFixture<DistribucionServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistribucionServiciosComponent]
    });
    fixture = TestBed.createComponent(DistribucionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
