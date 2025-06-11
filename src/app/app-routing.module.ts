import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { Pagina4Component } from './pages/pagina4/pagina4.component';
import { Pagina5Component } from './pages/pagina5/pagina5.component';
import { Pagina6Component } from './pages/pagina6/pagina6.component';
import { Pagina7Component } from './pages/pagina7/pagina7.component';
import { Pagina8Component } from './pages/pagina8/pagina8.component';
import { Pagina9Component } from './pages/pagina9/pagina9.component';
import { Pagina10Component } from './pages/pagina10/pagina10.component';

const routes: Routes = [
  { path: 'documento', component: DocumentosComponent }, 
  { path: 'resumen', component: ResumenComponent },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },
  { path: 'pagina4', component: Pagina4Component },
  { path: 'pagina5', component: Pagina5Component },
  { path: 'pagina6', component: Pagina6Component },
  { path: 'pagina7', component: Pagina7Component },
  { path: 'pagina8', component: Pagina8Component },
  { path: 'pagina9', component: Pagina9Component },
  { path: 'pagina10', component: Pagina10Component },

  { path: '', redirectTo: 'documento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
