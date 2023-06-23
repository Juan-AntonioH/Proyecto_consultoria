import { Injectable } from '@angular/core';
import { Acordeon } from '../modelos/acordeon';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor() { }

  acordeones: Acordeon[] = [
    {
      id: 1,
      estado: 'noActivo',
      titulo: "Obra Civil Industrial",
      mensaje: "En este sector de la ingeniería nos abocamos a la proyección, construcción y mantenimiento de infraestructuras y edificios para la Industria. Nuestros técnicos participan desde el principio en el diseño de plantas industriales, para esto se definen junto al cliente las necesidades productivas del proyecto y se trabaja en el desarrollo de un espacio que cumpla esas necesidades de forma efectiva.",
      ruta:"/servicios/obra-civil-industrial"
    },
    {
      id: 2,
      estado: 'noActivo',
      titulo: "Instalaciones Industriales",
      mensaje: "Desde 2006, trabajamos en la proyección y construcción de instalaciones para empresas de diferentes sectores, tanto del ámbito público como privado. Nuestro equipo de profesionales está especializado en la realización de proyectos de instalaciones fotovoltaicas, fototérmicas, eléctricas, de climatización, de protección contra incendios, frigoríficas, de aire comprimido, de fontanería y agua potable, como así también de calderas. Además, realizamos estudios acústicos y de aislamiento para garantizar el confort y la seguridad de nuestros clientes.",
      ruta:"/servicios/instalaciones-industriales"
    },
    {
      id: 3,
      estado: 'noActivo',
      titulo: "Distribución y servicios",
      mensaje: "Nuestros clientes abarcan una amplia gama de sectores: tiendas de distribución alimentaria, gasolineras, oficinas bancarias y centros de salud. Hemos trabajado en proyectos de distribución y servicios con las principales cadenas alimentarias a nivel nacional e internacional. Nuestra amplia experiencia en este sector nos permite ofrecer soluciones eficientes y adaptadas a las necesidades de cada cliente.",
      ruta:"/servicios/distribucion-servicios"
    },
    {
      id: 4,
      estado: 'noActivo',
      titulo: "Edificación",
      mensaje: "Somos una Ingeniería líder en el sector de la edificación, ofreciendo proyectos de obra e instalaciones que se adaptan a las necesidades de cada edificio, tanto público como privado. Nuestro objetivo es proporcionar un servicio integral, llevando a cabo todas las gestiones necesarias, desde la contratación y dirección de obra hasta la obtención de licencias municipales y el cálculo preciso de las instalaciones correspondientes.",
      ruta:"/servicios/edificacion"
    },
    {
      id: 5,
      estado: 'noActivo',
      titulo: "Hidráulica",
      mensaje: "Ofrecemos servicios de optimización de redes eléctricas e hidráulicas en comunidades de regantes, redes de riego (incluyendo embalses, estaciones de bombeo y distribución), redes de agua potable y saneamientos, estudios hidrológicos como así también potabilizaciones y estaciones depuradoras de aguas residuales (E.D.A.R.). Trabajamos para el sector agrícola, especialmente con las comunidades de regantes, con el objetivo de unir intereses y obtener los mejores resultados posibles.",
      ruta:"/servicios/hidraulica"
    },
    {
      id: 6,
      estado: 'noActivo',
      titulo: "Medio ambiente y calidad",
      mensaje: "Ofrecemos una amplia gama de servicios para ayudar a las organizaciones a resolver problemas relacionados con el medio ambiente, la calidad y la prevención. Estos servicios incluyen asistencia técnica medioambiental, implantación y seguimiento de sistemas de gestión, auditorías de calidad, medio ambiente o integradas, estudios de impacto ambiental, desarrollo urbanístico de pueblos, cumplimiento de la directiva marco de aguas, implantación de sistemas A.P.P.C.C. e intermediación en la gestión de residuos.",
      ruta:"/servicios/medioambiente"
    },
    {
      id: 7,
      estado: 'noActivo',
      titulo: "Sector Agroalimentario",
      mensaje: "Nuestro equipo se involucra completamente en cada proyecto, desde el diseño en planta y el estudio económico y de viabilidad hasta la redacción del proyecto de obra civil e instalaciones y la dirección de obra. También nos encargamos de obtener las licencias necesarias y colaboramos estratégicamente con nuestros clientes para gestionar subvenciones y obtener financiación para sus proyectos.",
      ruta:"/servicios/sector-agroalimentario"
    }
  ]

  getAcordeones() {
    return this.acordeones
  }
}
