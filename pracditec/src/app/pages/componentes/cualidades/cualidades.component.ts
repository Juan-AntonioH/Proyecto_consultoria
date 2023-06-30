import { Component } from '@angular/core';
import { Cualidad } from 'src/app/modelos/cualidad';

@Component({
  selector: 'app-cualidades',
  templateUrl: './cualidades.component.html',
  styleUrls: ['./cualidades.component.css']
})
export class CualidadesComponent {
cualidades:Cualidad[]=[
  {
    id:"01",
    titulo:"Profesionalismo",
    texto:"Desde el 2006 proyectando el futuro.",
    color:"#FFFFFF",
    background:"#16558F",
    borderColor:"#16558F"
  },
  {
    id:"02",
    titulo:"Trato",
    texto:"Cercanía y adaptado a cada proyecto.",
    color:"#72A4CD",
    background:"#FFFFFF",
    borderColor:"#72A4CD"
  },
  {
    id:"03",
    titulo:"Innovación",
    texto:"Últimas tecnologías y tendencias.",
    color:"#FFFFFF",
    background:"#CAAF82",
    borderColor:"#CAAF82"
  },
  {
    id:"04",
    titulo:"Metodologías",
    texto:"Aplicación de métodos sólidos en cada proyecto.",
    color:"#16558F",
    background:"#FFFFFF",
    borderColor:"#16558F"
  },
  {
    id:"05",
    titulo:"Certificaciones",
    texto:"Certificados nacional e internacionalmente.",
    color:"#CAAF82",
    background:"#FFFFFF",
    borderColor:"#CAAF82"
  },
  {
    id:"06",
    titulo:"Colaboración",
    texto:"Ámbito de trabajo colaborativo.",
    color:"#FFFFFF",
    background:"#72A4CD",
    borderColor:"#72A4CD"
  },
  {
    id:"07",
    titulo:"Satisfacción",
    texto:"Compromiso con las expectativas.",
    color:"#2B2A2A",
    background:"#FFFFFF",
    borderColor:"#2B2A2A"
  },
  {
    id:"08",
    titulo:"Sostenibilidad",
    texto:"Minimizamos el impacto en el medio ambiente.",
    color:"#FFFFFF",
    background:"#2B2A2A",
    borderColor:"#2B2A2A"
  }
]
}
