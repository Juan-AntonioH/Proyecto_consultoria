import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-distribucion-servicios',
  templateUrl: './distribucion-servicios.component.html',
  styleUrls: ['./distribucion-servicios.component.css']
})
export class DistribucionServiciosComponent {
  constructor(private renderer: Renderer2) { }

  tituloInicial = {
    "tipo": "servicios",
    "titulo": "Distribución y servicios",
    "imagen": "fondo_distribucion"
  }

  servicios: string[] = [
    "logo_yelmo_cines",
    "logo-aguas-calpe",
    "logo-caixa-popular",
    "logo-civi-red",
    "logo-colonial",
    "logo_decathlon",
    "logo_economy",
    "logo_emivasa",
    "logo_global_omnium",
    "logo_mercadona",
    "logo_monto",
    "logo_myo",
    "logo_orenes",
    "logo_sanitas",
    "logo_sermesa",
    "logo_tuco",
    "logo_wayco"
  ]

  tituloProyectos: string = "Ejemplos de proyectos de Servicios y Distribución"

  listaProyectos: string[] = [
    "Locales comerciales: tiendas de ropa, supermercados, etc.",
    "Bares, restaurantes, locales de ocio, etc.",
    'Estaciones de servicio',
    "Proyectos de obra y todo tipo de instalaciones comerciales",
    "Tiendas de distribución alimentaria",
    "Oficinas bancarias y seguros",
    "Clínicas e instalaciones sanitarias"
  ]
  imagenesExitos: string[]=[
    'caixapopular',
    'oficina',
    'decathlon'
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
