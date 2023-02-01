import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InicioModule} from "./modules/inicio/inicio.module";
import {EducacionModule} from "./modules/educacion/educacion.module";
import {ExperienciaModule} from "./modules/experiencia/experiencia.module";
import {HabilidadesModule} from "./modules/habilidades/habilidades.module";
import {ContactoModule} from "./modules/contacto/contacto.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InicioModule,
    EducacionModule,
    ExperienciaModule,
    HabilidadesModule,
    ContactoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
