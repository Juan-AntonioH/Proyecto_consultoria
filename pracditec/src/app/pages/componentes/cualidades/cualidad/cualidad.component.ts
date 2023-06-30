import { Component, Input } from '@angular/core';
import { Cualidad } from 'src/app/modelos/cualidad';

@Component({
  selector: 'app-cualidad',
  templateUrl: './cualidad.component.html',
  styleUrls: ['./cualidad.component.css']
})
export class CualidadComponent {
@Input() cualidad!:Cualidad
}
