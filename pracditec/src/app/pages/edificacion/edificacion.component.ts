import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-edificacion',
  templateUrl: './edificacion.component.html',
  styleUrls: ['./edificacion.component.css']
})
export class EdificacionComponent {
  constructor(private renderer: Renderer2) { }

  tituloInicial = {
    "tipo": "servicios",
    "titulo": "Edificación",
    "imagen": "edificacion"
  }

  edificacion: string[] = [
    "logo-acciona",
    "logo-active",
    "logo-aldaia",
    "logo-amislata-yuntamiento",
    "logo-ayuntamiento-paiporta",
    "logo-betera",
    "logo-bilbao-port",
    "logo-colegio-santa-cruz",
    "logo_generalitat_valenciana",
    "logo_global_omnium",
    "logo_go_hub",
    "logo_llucanes",
    "logo_municipalidad_horta_sud",
    "logo_orenes_casino",
    "logo_sindicatura_valenciana",
    "logo_tempo",
    "logo_vadis",
    "logo_vila"
  ]

  mensajeProyecto: string = "Servicio integral de Edificación para el sector público y privado"

  tituloProyectos: string = "Ejemplos de proyectos de Edificación"

  listaProyectos: string[] = [
    "Viviendas unifamiliares",
    "Promociones inmobiliarias: edificios de viviendas",
    'Edificios públicos: gimnasios, balnearios, polideportivos, etc.',
    "Edificios de oficinas",
    "Instalaciones: baja tensión, solar, climatización, gas, etc."
  ]
  imagenesExitos: string[]=[
    'edificacion1',
    'edificacion2',
    'edificacion3',
    'edificacion4',
    'edificacion5',
    'edificacion6',
    'edificacion7',
    'edificacion8',
    'edificacion9',
    'edificacion10',
    'edificacion11',
    'edificacion12',
    'edificacion13',
    'edificacion14',
    'edificacion15',
    'edificacion16',
    'edificacion17',
    'edificacion18',
    'edificacion19',
    'edificacion20',
    'edificacion21',
    'edificacion22',
    'edificacion23',
    'edificacion24',
  ]

  cliente_mensaje = {
    "mensaje": '"Personal súper atento y amable, trato personalizado con muy buena comunicación. Asesoramiento profesional en todo momento que denota la amplia experiencia que tienen en el sector. Totalmente recomendable."',
    "nombre": "Javier Ponce",
    "profesion": "Cliente GEDITEC INGENIERÍA",
    "img":"Javier_Ponce"
  }

  loadScript() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'assets/js/javascript.js';
    this.renderer.appendChild(document.body, script);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadScript();
    }, 0);
  }
}
