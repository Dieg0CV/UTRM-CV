import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';


@NgModule({
    declarations: [
        InicioComponent
    ],
    exports: [
        InicioComponent
    ],
    imports: [
        CommonModule,
        InicioRoutingModule,
        MatSlideToggleModule,

    ]
})
export class InicioModule { }
