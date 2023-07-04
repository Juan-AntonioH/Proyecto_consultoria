import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-obra-civil-industrial',
  templateUrl: './obra-civil-industrial.component.html',
  styleUrls: ['./obra-civil-industrial.component.css']
})

export class ObraCivilIndustrialComponent {
  constructor(private renderer: Renderer2) { }
  tituloInicial = {
    "tipo": "servicios",
    "titulo": "Obra civil Industrial",
    "imagen": "fondo-obra-civil"
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

  tituloProyectos: string = "Ejemplos de proyectos de Obra Civil industrial"

  listaProyectos: string[] = [
    "Almacenes industriales",
    "Talleres de vehículos, concesionarios",
    'Naves "nido" para promociones',
    "Centros logísticos",
    "Industria agroalimentaria",
    "Industria química",
    "Gestión de subvenciones"
  ]
  imagenesExitos: string[]=[
    'nave_metal',
    'lacteos',
    'PENASOL_FINAL_ok',
    'MIARCO1'
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
