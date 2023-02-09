import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacionRoutingModule } from './educacion-routing.module';
import { EducacionComponent } from './educacion.component';
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
    declarations: [
        EducacionComponent
    ],
    exports: [
        EducacionComponent
    ],
    imports: [
        CommonModule,
        EducacionRoutingModule,
        MatGridListModule
    ]
})
export class EducacionModule { }
