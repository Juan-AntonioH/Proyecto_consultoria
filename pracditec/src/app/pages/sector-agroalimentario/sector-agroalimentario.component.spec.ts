import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorAgroalimentarioComponent } from './sector-agroalimentario.component';

describe('SectorAgroalimentarioComponent', () => {
  let component: SectorAgroalimentarioComponent;
  let fixture: ComponentFixture<SectorAgroalimentarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectorAgroalimentarioComponent]
    });
    fixture = TestBed.createComponent(SectorAgroalimentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
