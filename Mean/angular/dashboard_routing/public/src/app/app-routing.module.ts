import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllComponent } from './show-all/show-all.component';
import { ShowOneComponent } from './show-one/show-one.component';
import { NewComponent } from './new/new.component';



const routes: Routes = [
  { path: 'rabbits', component: ShowAllComponent},
  { path: 'rabbits/new', component: NewComponent},
  { path: 'rabbits/:id', component: ShowOneComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
