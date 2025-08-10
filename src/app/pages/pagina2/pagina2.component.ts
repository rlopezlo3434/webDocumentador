import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/services/formulario.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  datos: any;
  jsonData: any[] = [];
  opcionesFormateadas: string[] = [];
  seleccionActual: string = '';
  nombreGrupoAISD: string = '';

  constructor(private formularioService: FormularioService, private router: Router) {
    this.datos = this.formularioService.obtenerDatos();
    console.log(this.formularioService.obtenerJSON());
    this.jsonData = this.formularioService.obtenerJSON();

    this.opcionesFormateadas = this.jsonData.map(item => {
      let codigoStr = item.CODIGO.toString().padStart(9, '0');
      return `${item.CCPP} - ${codigoStr}`;
    });

    this.datos.aisdComponente2 = 'ambas comunidades son propietarias de los terrenos superficiales donde se ubica el Proyecto y serán las que recibirá los impactos que este genere de manera directa, tales como intercambio socioeconómico (contratación de mano de obra local), interacción con las costumbres locales y sus autoridades';
    this.formularioService.actualizarDatos(this.datos);
  }

  cambiarNombre() {
    this.datos.grupoAISD = this.nombreGrupoAISD;
    console.log('Nombre del grupo AISD actualizado:', this.datos.grupoAISD);
    this.datos.aisdComponente1 = 'El Proyecto se ubica en el distrito de ' + (this.datos.grupoAISD != '' ? this.datos.grupoAISD : this.jsonData[0].DIST) + ', provincia de ' + this.jsonData[0].PROV + ', departamento de ' + this.jsonData[0].DPTO;
    this.formularioService.actualizarDatos(this.datos);
  }

  agregarSeleccionado() {
    if (this.seleccionActual && !this.datos.seleccionados.includes(this.seleccionActual)) {
      this.datos.seleccionados.push(this.seleccionActual);
      this.seleccionActual = '';
      this.datos.aisdComponente1 = 'El Proyecto se ubica en el distrito de ' + (this.datos.grupoAISD != '' ? this.datos.grupoAISD : this.jsonData[0].DIST) + ', provincia de ' + this.jsonData[0].PROV + ', departamento de ' + this.jsonData[0].DPTO;
    }
  }

  eliminarSeleccionado(index: number) {
    this.datos.seleccionados.splice(index, 1);
    this.formularioService.actualizarDatos(this.datos);
  }

  seleccionarTodos() {
    this.datos.seleccionados = [...this.opcionesFormateadas];
    this.formularioService.actualizarDatos(this.datos);
  }

  siguientePaso() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/pagina3']);
  }

  regresar() {
    this.router.navigate(['/documento']);
  }
}
