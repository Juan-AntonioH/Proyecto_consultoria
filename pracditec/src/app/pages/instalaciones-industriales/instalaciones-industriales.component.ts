import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-instalaciones-industriales',
  templateUrl: './instalaciones-industriales.component.html',
  styleUrls: ['./instalaciones-industriales.component.css']
})
export class InstalacionesIndustrialesComponent {
  constructor(private renderer: Renderer2) { }

  tituloInicial = {
    "tipo": "servicios",
    "titulo": "Instalaciones Industriales",
    "imagen": "fondo-industriales"
  }

  industrial: string[] = [
    "logo-acciona",
    "logo-acento-laboratorios",
    "logo-alvinox",
    "logo-arcelor-mittal",
    "logo-bet-solar",
    "logo-cadel-deinking",
    "logo-clariana",
    "logo-crem",
    "logo-bronchales",
    "logo-crown",
    "logo_ebir",
    "logo_faerch_plast",
    "logo_fede_farma",
    "logo_imex",
    "logo_importaco",
    "logo_inurban",
    "logo_istobal",
    "logo_jaeger",
    "logo_jasa",
    "logo_krannich",
    "logo_kuora",
    "logo_marqueset",
    "logo_mercavalencia",
    "logo_miquel_y_costas",
    "logo_moldtrans",
    "logo_natra",
    "logo_nederval",
    "logo_solera",
    "logo_sp_berner",
    "logo_tiba",
    "logo-miarco",
    "logo-lacteos-roma"
  ]

  tituloProyectos: string = "Servicios Instalaciones Industriales"

  listaProyectos: string[] = [
    "Instalaciones Fotovoltaicas",
    "Instalaciones fototérmicas",
    'Instalaciones eléctricas',
    "Instalaciones de climatización",
    "Instalaciones de protección contra incendios",
    "Instalaciones frigoríficas",
    "Instalaciones de aire comprimido",
    "Instalaciones de fontanería y agua potable",
    "Instalaciones de calderas",
    "Estudios acústicos y de aislamiento de sonido"
  ]
  imagenesExitos: string[] = [
    'MG_7740',
    'MG_7773',
    'MG_8608'
  ]

  cliente_mensaje = {
    "mensaje": '"Con toda la burocracia y trámites burocráticos relacionados con licencias, permisos y regulaciones, GEDITEC lo hace todo fácil. ¡Muy recomendable!"',
    "nombre": "Omar Eid",
    "profesion": "Cliente GEDITEC INGENIERÍA",
    "img": "Omar_Eid"
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
