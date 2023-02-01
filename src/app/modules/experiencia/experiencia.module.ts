import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciaRoutingModule } from './experiencia-routing.module';
import { ExperienciaComponent } from './experiencia.component';


@NgModule({
    declarations: [
        ExperienciaComponent
    ],
    exports: [
        ExperienciaComponent
    ],
    imports: [
        CommonModule,
        ExperienciaRoutingModule
    ]
})
export class ExperienciaModule { }
