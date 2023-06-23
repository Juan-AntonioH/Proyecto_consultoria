import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-publicitario',
  templateUrl: './slider-publicitario.component.html',
  styleUrls: ['./slider-publicitario.component.css']
})
export class SliderPublicitarioComponent {
  @Input() slider!:Array<string>
}
