import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ObraCivilIndustrialComponent } from './pages/obra-civil-industrial/obra-civil-industrial.component';
import { InstalacionesIndustrialesComponent } from './pages/instalaciones-industriales/instalaciones-industriales.component';
import { DistribucionServiciosComponent } from './pages/distribucion-servicios/distribucion-servicios.component';
import { EdificacionComponent } from './pages/edificacion/edificacion.component';
import { HidraulicaComponent } from './pages/hidraulica/hidraulica.component';
import { MedioambienteComponent } from './pages/medioambiente/medioambiente.component';
import { SectorAgroalimentarioComponent } from './pages/sector-agroalimentario/sector-agroalimentario.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "servicios/obra-civil-industrial", component: ObraCivilIndustrialComponent },
  { path: "servicios/instalaciones-industriales", component: InstalacionesIndustrialesComponent },
  { path: "servicios/distribucion-servicios", component: DistribucionServiciosComponent },
  { path: "servicios/edificacion", component: EdificacionComponent },
  { path: "servicios/hidraulica", component: HidraulicaComponent },
  { path: "servicios/medioambiente", component: MedioambienteComponent },
  { path: "servicios/sector-agroalimentario", component: SectorAgroalimentarioComponent },
  { path: "**", component: Error404Component }
  // { path: "panelTareas",canActivate:[GuardaGuard], component: PanelTareasComponent },
  // { path: "finalizarTarea/:id", component: FinalizarTareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
