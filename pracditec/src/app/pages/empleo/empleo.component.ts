import { Component } from '@angular/core';
import { Contacto } from 'src/app/modelos/contacto';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent {
  tituloInicial = {
    "tipo": "BUSCAMOS TALENTO",
    "titulo": "Empleo en GEDITEC Ingeniería",
    "imagen": "fondo-obra-civil"
  }

  contacto: Contacto =
    {
      ruta: "mailto:pruebas@pruebas.com",
      background: "#16558F",
      titulo: "Correo electrónico",
      mensaje: "Haz clic para escribirnos un correo a pruebas@pruebas.com",
      tipo: "Enviar correo"
    }

}
