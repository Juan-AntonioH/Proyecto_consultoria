import { Component } from '@angular/core';

@Component({
  selector: 'app-sector-agroalimentario',
  templateUrl: './sector-agroalimentario.component.html',
  styleUrls: ['./sector-agroalimentario.component.css']
})
export class SectorAgroalimentarioComponent {
  tituloInicial = {
    "tipo": "servicios",
    "titulo": "Sector Agroalimentario",
    "imagen": "fondo-industriales"
  }


  mensajeProyecto: string = "Soluciones de Ingeniería para optimizar el proceso productivo del sector Agroalimentario"

  tituloProyectos: string = "Servicios Sector Agroalimentario"

  listaProyectos: string[] = [
    "Centrales hortofrutícolas",
    "Centros logísticios de distribución alimentaria",
    'Almacenes frigoríficos',
    "Mataderos",
    "Almazaras",
    "Almacenes de fitosanitarios y pesticidas ",
    "Industrias agroalimentarias varias",
    "Granjas"
  ]

  imagenesExitos: string[]=[
    'agroalimentario1',
    'agroalimentario2',
    'agroalimentario3'
  ]

  cliente_mensaje = {
    "mensaje": '"Buen trato, rapidez y facilidades. Lo que buscas cuando contratas un servicio. Volveremos a confiar en ellos sin dudarlo"',
    "nombre": "Rafael García",
    "profesion": "Cliente GEDITEC INGENIERÍA",
    "img":"Rafael_Garcia"
  }
}
