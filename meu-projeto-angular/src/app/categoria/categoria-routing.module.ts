
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasFormComponent } from './categoria-form/categoria-form.component';

const routes: Routes = [
  {path :'categoria-list', component : CategoriaListComponent},
  {path : 'categoria-form', component :CategoriasFormComponent},
  {path : 'categoria-form/:id', component :CategoriasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
