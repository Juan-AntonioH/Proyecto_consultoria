import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPublicitarioComponent } from './slider-publicitario.component';

describe('SliderPublicitarioComponent', () => {
  let component: SliderPublicitarioComponent;
  let fixture: ComponentFixture<SliderPublicitarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderPublicitarioComponent]
    });
    fixture = TestBed.createComponent(SliderPublicitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
