import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path: '',
    component: InputComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: '**',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
