import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-inicial',
  templateUrl: './titulo-inicial.component.html',
  styleUrls: ['./titulo-inicial.component.css']
})
export class TituloInicialComponent {
@Input() tituloInicial!:any
}
