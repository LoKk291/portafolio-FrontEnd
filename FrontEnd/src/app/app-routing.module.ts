import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'acerca-de-mi', component:AcercaDeMiComponent},
  {path: 'proyectos', component:ProyectsComponent},
  {path: 'contact', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
