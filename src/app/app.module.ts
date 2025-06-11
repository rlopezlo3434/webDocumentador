import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { Pagina4Component } from './pages/pagina4/pagina4.component';
import { Pagina5Component } from './pages/pagina5/pagina5.component';
import { Pagina6Component } from './pages/pagina6/pagina6.component';
import { Pagina7Component } from './pages/pagina7/pagina7.component';
import { Pagina8Component } from './pages/pagina8/pagina8.component';
import { HttpClientModule } from '@angular/common/http';
import { Pagina9Component } from './pages/pagina9/pagina9.component';
import { Pagina10Component } from './pages/pagina10/pagina10.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentosComponent,
    ResumenComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component,
    Pagina6Component,
    Pagina7Component,
    Pagina8Component,
    Pagina9Component,
    Pagina10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
