import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaDeMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
