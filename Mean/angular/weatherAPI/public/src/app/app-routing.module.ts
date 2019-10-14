import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanDiegoComponent } from './san-diego/san-diego.component';
import { AshevilleComponent } from './asheville/asheville.component';
import { PortlandComponent } from './portland/portland.component';
import { NewOrleansComponent } from './new-orleans/new-orleans.component';
import { SanFranciscoComponent } from './san-francisco/san-francisco.component';



const routes: Routes = [
  {path: 'Chicago', component: ChicagoComponent },
  {path: 'San Diego', component: SanDiegoComponent},
  {path: 'Asheville', component: AshevilleComponent },
  {path: 'Portland', component: PortlandComponent },
  {path: 'New Orleans', component: NewOrleansComponent },
  {path: 'San Francisco', component: SanFranciscoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
