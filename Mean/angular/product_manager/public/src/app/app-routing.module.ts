import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ShowAllComponent } from './show-all/show-all.component';


const routes: Routes = [
  {path: 'products', component: ShowAllComponent},
  {path: 'products/new', component: NewComponent},
  {path: 'products/:id', component: EditComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
