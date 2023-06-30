import { Component, Input } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  faDotCircle = faDotCircle;
  @Input() tituloProyectos!:string
  @Input() listaProyectos!:string[]
}
