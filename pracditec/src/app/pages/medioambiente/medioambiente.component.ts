import { Component } from '@angular/core';

@Component({
  selector: 'app-medioambiente',
  templateUrl: './medioambiente.component.html',
  styleUrls: ['./medioambiente.component.css']
})
export class MedioambienteComponent {

  tituloInicial = {
    "tipo": "servicios",
    "titulo": "Medioambiente y calidad",
    "imagen": "medioambiente"
  }


  mensajeProyecto: string = "Una hoja de ruta para hacer las cosas bien, en materia de Medioambiente, calidad y prevención"

  tituloProyectos: string = "Servicios relacionados a Medio Ambiente y calidad"

  listaProyectos: string[] = [
    "Certificados Energéticos",
    "Asistencia técnica medioambiental",
    'Implantación y seguimiento de sistemas de gestión',
    "Auditorías calidad, medio ambiente o integradas",
    "Estudios de impacto ambiental",
    "Directiva marco de aguas",
    "Desarrollo urbanístico de pueblos",
    "Implantación de sistemas A.P.P.C.C.",
    "Intermediación en la gestión de residuos"
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
