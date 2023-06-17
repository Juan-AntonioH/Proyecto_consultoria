import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosExitosComponent } from './casos-exitos.component';

describe('CasosExitosComponent', () => {
  let component: CasosExitosComponent;
  let fixture: ComponentFixture<CasosExitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasosExitosComponent]
    });
    fixture = TestBed.createComponent(CasosExitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
