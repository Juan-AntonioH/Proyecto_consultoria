import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { FooterComponent } from './footer/footer.component';
import { SliderPublicitarioComponent } from './pages/componentes/slider-publicitario/slider-publicitario.component';
import { TituloInicialComponent } from './pages/componentes/titulo-inicial/titulo-inicial.component';
import { ProyectosComponent } from './pages/componentes/proyectos/proyectos.component';
import { SobreNosotrosComponent } from './pages/componentes/sobre-nosotros/sobre-nosotros.component';
import { OfrecemosComponent } from './pages/componentes/ofrecemos/ofrecemos.component';
import { MensajeComponent } from './pages/componentes/mensaje/mensaje.component';
import { CasosExitosComponent } from './pages/componentes/casos-exitos/casos-exitos.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CualidadesComponent } from './pages/componentes/cualidades/cualidades.component';
import { CualidadComponent } from './pages/componentes/cualidades/cualidad/cualidad.component';
import { ObraCivilIndustrialComponent } from './pages/obra-civil-industrial/obra-civil-industrial.component';
import { ProyectoComponent } from './pages/componentes/proyectos/proyecto/proyecto.component';
import { InstalacionesIndustrialesComponent } from './pages/instalaciones-industriales/instalaciones-industriales.component';
import { DistribucionServiciosComponent } from './pages/distribucion-servicios/distribucion-servicios.component';
import { EdificacionComponent } from './pages/edificacion/edificacion.component';
import { MedioambienteComponent } from './pages/medioambiente/medioambiente.component';
import { HidraulicaComponent } from './pages/hidraulica/hidraulica.component';
import { SectorAgroalimentarioComponent } from './pages/sector-agroalimentario/sector-agroalimentario.component';
import { EmpleoComponent } from './pages/empleo/empleo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactosComponent } from './pages/componentes/contactos/contactos.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    NosotrosComponent,
    FooterComponent,
    SliderPublicitarioComponent,
    TituloInicialComponent,
    ProyectosComponent,
    SobreNosotrosComponent,
    OfrecemosComponent,
    MensajeComponent,
    CasosExitosComponent,
    CualidadesComponent,
    CualidadComponent,
    ObraCivilIndustrialComponent,
    ProyectoComponent,
    InstalacionesIndustrialesComponent,
    DistribucionServiciosComponent,
    EdificacionComponent,
    MedioambienteComponent,
    HidraulicaComponent,
    SectorAgroalimentarioComponent,
    EmpleoComponent,
    ContactoComponent,
    Error404Component,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
