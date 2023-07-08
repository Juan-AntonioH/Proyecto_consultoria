import { Component, Renderer2 } from '@angular/core';
import { Contacto } from 'src/app/modelos/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private renderer: Renderer2) { }
  tituloInicial = {
    "tipo": "¿TIENES UN PROYECTO?",
    "titulo": "Contáctanos",
    "imagen": "fondo-obra-civil"
  }

  contactos: Contacto[] =[
    {
      ruta: "mailto:pruebas@pruebas.com",
      background: "#16558F",
      titulo: "Correo electrónico",
      mensaje: "Haz clic para escribirnos un correo a pruebas@pruebas.com",
      tipo: "Enviar correo"
    },
    {
      ruta: "tel:+34123456789",
      background: "#A2C4E0",
      titulo: "Llámanos",
      mensaje: "Teléfono Oficinas Centrales<br>+34 123 456 789",
      tipo: "Llamar"
    },
    {
      ruta: "https://goo.gl/maps/1krrbMe9fE8DiFSK6",
      background: "#CAAF82",
      titulo: "Visítanos",
      mensaje: "Calle Perdida, nº 99, Bajo. 46920, Valencia, España",
      tipo: "Google Maps"
    },
  ]

  loadScript() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'assets/js/ckeditor.js';
    this.renderer.appendChild(document.body, script);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadScript();
    }, 0);
  }
}
