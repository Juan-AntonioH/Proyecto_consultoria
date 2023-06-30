import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
