import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/services/formulario.service';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.component.html',
  styleUrls: ['./pagina5.component.css']
})
export class Pagina5Component {
  datos: any;
  json: any;
  constructor(private formularioService: FormularioService, private router: Router) {
    this.datos = this.formularioService.obtenerDatos();
    console.log(this.formularioService.obtenerJSON());

    this.json = this.formularioService.obtenerJSON();

    this.formularioService.actualizarDatos(this.datos);
  }

  siguientePaso() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/pagina6']);
  }

  regresar() {
    this.router.navigate(['/pagina4']);
  }
}
