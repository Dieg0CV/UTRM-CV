import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacionRoutingModule } from './educacion-routing.module';
import { EducacionComponent } from './educacion.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


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
        MatGridListModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class EducacionModule { }
