import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriasFormComponent } from './categoria-form/categoria-form.component';



@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriasFormComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    SharedModule
    ]
})
export class CategoriaModule { }
