import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilidadesRoutingModule } from './habilidades-routing.module';
import { HabilidadesComponent } from './habilidades.component';


@NgModule({
    declarations: [
        HabilidadesComponent
    ],
    exports: [
        HabilidadesComponent
    ],
    imports: [
        CommonModule,
        HabilidadesRoutingModule
    ]
})
export class HabilidadesModule { }
