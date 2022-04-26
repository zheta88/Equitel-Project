import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from './form/form.component'
import { TableComponent } from './table/table.component';

const routes: Routes = [
 
  {
    path:'motores',
    component: TableComponent
  },
{
  path:'formulario',
  component: FormComponent
},

 { path:'formulario/:id',
  component: FormComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
