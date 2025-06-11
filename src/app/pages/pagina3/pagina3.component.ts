import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/services/formulario.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component {
  datos: any;
  jsonData: any[] = [];
  opcionesFormateadas: string[] = [];
  seleccionActual: string = '';

  constructor(private formularioService: FormularioService, private router: Router) {
    this.datos = this.formularioService.obtenerDatos();
    console.log(this.formularioService.obtenerJSON());
    this.jsonData = this.formularioService.obtenerJSON();

    this.opcionesFormateadas = this.jsonData.map(item => {
      let codigoStr = item.CODIGO.toString().padStart(9, '0');
      return `${item.CCPP} - ${codigoStr}`;
    });

    this.datos.aisiComponente2 = '';
    this.formularioService.actualizarDatos(this.datos);
  }

  agregarSeleccionado() {
    if (this.seleccionActual && !this.datos.seleccionadosAISI.includes(this.seleccionActual)) {
      this.datos.seleccionadosAISI.push(this.seleccionActual);
      this.seleccionActual = '';
      this.datos.aisiComponente1 = 'El Proyecto se ubica en el distrito de ' + this.jsonData[0].DIST + ', provincia de ' + this.jsonData[0].PROV + ', departamento de ' + this.jsonData[0].DPTO;
    }
  }

  eliminarSeleccionado(index: number) {
    this.datos.seleccionadosAISI.splice(index, 1);
    this.formularioService.actualizarDatos(this.datos);
  }

  seleccionarTodos() {
    this.datos.seleccionadosAISI = [...this.opcionesFormateadas];
    this.formularioService.actualizarDatos(this.datos);
  }

  siguientePaso() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/pagina4']);
  }

  regresar() {
    this.router.navigate(['/pagina2']);
  }
}
