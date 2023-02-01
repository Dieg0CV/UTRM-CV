import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacionRoutingModule } from './educacion-routing.module';
import { EducacionComponent } from './educacion.component';


@NgModule({
    declarations: [
        EducacionComponent
    ],
    exports: [
        EducacionComponent
    ],
    imports: [
        CommonModule,
        EducacionRoutingModule
    ]
})
export class EducacionModule { }
