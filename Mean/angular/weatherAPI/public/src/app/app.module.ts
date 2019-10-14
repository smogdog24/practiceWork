import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanDiegoComponent } from './san-diego/san-diego.component';
import { AshevilleComponent } from './asheville/asheville.component';
import { PortlandComponent } from './portland/portland.component';
import { NewOrleansComponent } from './new-orleans/new-orleans.component';
import { SanFranciscoComponent } from './san-francisco/san-francisco.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowOneComponent } from './show-one/show-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent,
    SanDiegoComponent,
    AshevilleComponent,
    PortlandComponent,
    NewOrleansComponent,
    SanFranciscoComponent,
    ShowOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
