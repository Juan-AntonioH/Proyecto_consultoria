import { Component } from '@angular/core';

@Component({
  selector: 'app-hidraulica',
  templateUrl: './hidraulica.component.html',
  styleUrls: ['./hidraulica.component.css']
})
export class HidraulicaComponent {

  tituloInicial = {
    "tipo": "servicios",
    "titulo": "Hidráulica",
    "imagen": "edificacion"
  }


  mensajeProyecto: string = "Soluciones eficientes a los desafíos de la Ingeniería Hidráulica que surgen a diario"

  tituloProyectos: string = "Ejemplos de proyectos de Ingeniería Hidráulica"

  listaProyectos: string[] = [
    "Optimización de redes eléctricas, e hidráulicas en comunidades de regantes",
    "Redes de riego (embalses, estaciones de bombeo, distribución)",
    'Redes de agua potable y saneamientos',
    "Estudios hidrológicos",
    "Potabilizaciones y estaciones depuradoras de aguas residuales (E.D.A.R.)"
  ]

  imagenesExitos: string[]=[
    'hidraulica1',
    'hidraulica2',
    'hidraulica3'
  ]

  cliente_mensaje = {
    "mensaje": '"Extraordinario trabajo, atención y resultados. Profesionales comprometidos con su trabajo y pendientes de satisfacer a sus clientes, muchos de ellos agradecidos y contentos"',
    "nombre": "Javier Pastor Madalena",
    "profesion": "Cliente GEDITEC INGENIERÍA",
    "img":"Javier_Pastor"
  }

}
