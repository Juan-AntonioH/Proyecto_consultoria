import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ObraCivilIndustrialComponent } from './pages/obra-civil-industrial/obra-civil-industrial.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "servicios/obra-civil-industrial", component:ObraCivilIndustrialComponent }
  // { path: "panelTareas",canActivate:[GuardaGuard], component: PanelTareasComponent },
  // { path: "finalizarTarea/:id", component: FinalizarTareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
