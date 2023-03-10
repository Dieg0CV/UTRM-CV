import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilidadesRoutingModule } from './habilidades-routing.module';
import { HabilidadesComponent } from './habilidades.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        HabilidadesComponent
    ],
    exports: [
        HabilidadesComponent
    ],
    imports: [
        CommonModule,
        HabilidadesRoutingModule,
        MatGridListModule,
        MatProgressBarModule,
        MatCardModule,
        MatListModule
    ]
})
export class HabilidadesModule { }
