import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        ContactoComponent
    ],
    exports: [
        ContactoComponent
    ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ContactoModule { }
