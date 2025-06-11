import { Component, OnInit } from '@angular/core';
import { Pagina7Service } from './pagina7.service';
import { FormularioService } from 'src/app/services/services/formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina7',
  templateUrl: './pagina7.component.html',
  styleUrls: ['./pagina7.component.css']
})
export class Pagina7Component implements OnInit {

  datosObtenidos: any;

  datos: any;
  json: any;
  constructor(private pagina7Service: Pagina7Service, private formularioService: FormularioService, private router: Router) { }

  ngOnInit() {
    console.log(this.formularioService.obtenerJSON());
    this.datos = this.formularioService.obtenerDatos();
    this.obtenerdata();
  }

  obtenerdata() {
    const jsonData = this.formularioService.obtenerJSON();
    const codigos = jsonData.map((item: any) => item.CODIGO.toString());
    console.log(codigos);
    console.log(this.datos.seleccionados);
    const soloNumeros = this.datos.seleccionados.map((item:any) => item.split(' - ')[1]);
    this.pagina7Service.getData(soloNumeros).subscribe(response => {
      console.log(response.poblacion);
      this.datos.datosobtenidosAPI = response;

      this.datos.PoblacionSexo = 'Respecto a la población de la ' +
        this.datos.distritoSeleccionado + ', tomando en cuenta los centros poblados según el INEI que se hallan asociados a la comunidad, hay '
        + this.datos.datosobtenidosAPI.poblacion?.totalPobladores +
        ' habitantes que viven permanentemente en la zona. De este conjunto, el ' + this.datos.datosobtenidosAPI.poblacion?.porcentajeMujeres +
        '% son mujeres, por lo que se aprecia una leve mayoría de dicho grupo frente a sus pares masculinos (' + this.datos.datosobtenidosAPI.poblacion?.porcentajeVarones + '%).'

      this.datos.PoblacionEtarios = 'En una clasificación en grandes grupos de edad se puede observar que esta población se encuentra mayoritariamente en la categoría de 0 a 14 años, representando el ' + this.datos.datosobtenidosAPI.poblacion?.de0a14Porcentaje +
        '% del conjunto total, es decir, un poco más del tercio total. En segundo lugar, se halla la categoría de 15 a 29 años (' + this.datos.datosobtenidosAPI.poblacion?.de14a29Porcentaje +
        '%). En cuanto al bloque etario minoritario, es aquel conformado por personas de 65 años a más, llegando a representar solo el '
        + this.datos.datosobtenidosAPI.poblacion?.de65amasPorcentaje + '% de la población de estudio.'
    });
  }

  siguientePaso() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/pagina8']);
  }

  regresar() {
    this.router.navigate(['/pagina6']);
  }

}
