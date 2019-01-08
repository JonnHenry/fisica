import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosComponent } from './datos/datos.component';
import { HttpClientModule } from '@angular/common/http';
import { PeticionServicio } from './service';


@NgModule({
  declarations: [
    AppComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ PeticionServicio ],
  bootstrap: [AppComponent]
})
export class AppModule { }
