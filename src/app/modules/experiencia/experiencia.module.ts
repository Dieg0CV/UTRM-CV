import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciaRoutingModule } from './experiencia-routing.module';
import { ExperienciaComponent } from './experiencia.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
    declarations: [
        ExperienciaComponent
    ],
    exports: [
        ExperienciaComponent
    ],
    imports: [
        CommonModule,
        ExperienciaRoutingModule,
        MatCardModule
    ]
})
export class ExperienciaModule { }
