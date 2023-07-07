import { Component, Input } from '@angular/core';
import { Contacto } from 'src/app/modelos/contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  @Input() contacto!: Contacto
}
