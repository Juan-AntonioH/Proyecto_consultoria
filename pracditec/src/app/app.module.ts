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
    CasosExitosComponent
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
