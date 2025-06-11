import { Component, OnInit } from '@angular/core';
import { Pagina9Service } from './pagina9.service';
import { FormularioService } from 'src/app/services/services/formulario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina9',
  templateUrl: './pagina9.component.html',
  styleUrls: ['./pagina9.component.css']
})
export class Pagina9Component implements OnInit {
  datos: any;
  json: any;
  actividad: string = '';
  casos: number | null = null;
  actividades: { actividad: string; casos: number, porcentaje: number }[] = [];
  constructor(private pagina9Service: Pagina9Service, private formularioService: FormularioService, private router: Router) { }

  ngOnInit() {
    console.log(this.formularioService.obtenerJSON());
    this.datos = this.formularioService.obtenerDatos();
    console.log(this.datos);
    this.obtenerdata();
  }

  obtenerdata() {
    const jsonData = this.formularioService.obtenerJSON();
    const codigos = jsonData.map((item: any) => item.CODIGO.toString());
    console.log(codigos);
    const soloNumeros = this.datos.seleccionados.map((item: any) => item.split(' - ')[1]);
    // this.pagina9Service.getData(soloNumeros).subscribe(response => {
    //   this.datos.datosobtenidosAPI3 = console.log(response);

    //   this.datos.detalleCaracteristicasEconomicas = `Dentro de las principales actividades en las que destaca 
    //   la ${this.datos.distritoSeleccionado} están la ganadería y el comercio al por menor. Además, 
    //   también hay varias personas no inscritas en la comunidad que se dedican a trabajos eventuales 
    //   en construcción, transporte o en el cuidado de ganado. A continuación, se presenta los datos 
    //   existentes a nivel del ${this.datos.distritoSeleccionado} de la PEA por Actividad Económica en
    //   base a los Censos Nacionales 2017 a través del portal Redatam de INEI a nivel de Manzana. Se 
    //   describe a nivel de la capital distrital por hallarse información disponible de esta variable, 
    //   además de que por ser el centro comunal y concentrar la mayor parte de la población comunal puede 
    //   representar de mejor manera las actividades económicas realizadas dentro de la comunidad.`;

    //   const sortedData = response.datelle.sort((a: any, b: any) => b.casos - a.casos);

    //   this.datos.detalleCaracteristicasEconomicas2 = `En ese sentido, la actividad económica más recurrente es la de 
    //   ${sortedData[0].nombre} (${sortedData[0].porcentaje}%), seguido de 
    //   ${sortedData[1].nombre} (${sortedData[0].porcentaje}%). Otras actividades frecuentes son 
    //   ${sortedData[1].nombre} (${sortedData[1].porcentaje}%) y 
    //   ${sortedData[2].nombre} (${sortedData[2].porcentaje}%).`;

    // });


  }

  agregarActividad() {
    if (this.actividad && this.casos !== null) {
      // Calcular el total de casos incluyendo el nuevo
      const totalCasosPrevios = this.actividades.reduce((sum, act) => sum + act.casos, 0);
      const totalCasosNuevo = totalCasosPrevios + this.casos;
  
      // Calcular el porcentaje del nuevo elemento
      const porcentajeNuevo = totalCasosNuevo > 0 ? (this.casos / totalCasosNuevo) * 100 : 0;
  
      // Agregar la nueva actividad con porcentaje
      this.actividades.push({
        actividad: this.actividad,
        casos: this.casos,
        porcentaje: parseFloat(porcentajeNuevo.toFixed(2))
      });
  
      // Limpiar campos
      this.actividad = '';
      this.casos = null;
  
      // Recalcular todos los porcentajes según el nuevo total
      this.actividades = this.actividades.map(act => {
        const porcentaje = totalCasosNuevo > 0 ? (act.casos / totalCasosNuevo) * 100 : 0;
        return {
          ...act,
          porcentaje: parseFloat(porcentaje.toFixed(2))
        };
      });
      console.log(this.actividades);
      this.actualizarLista();
    }
  }

  getPorcentajeFormateado(porcentaje: any): string {
    const num = Number(porcentaje);
    return !isNaN(num) ? `${num.toFixed(2)}%` : '—';
  }
  
  actualizarLista() {
    // Definir el número total de encuestas a evaluar
    const encuestasEvaluar = 40 - parseInt(this.datos.encuestasNoAplicaPagina9);
  
    // Calcular el porcentaje y actualizar tablepagina9
    this.datos.tablepagina9 = this.actividades.map((item) => {
      const porcentaje = ((item.casos / encuestasEvaluar) * 100).toFixed(2);
      return {
        ...item,
        porcentaje: `${porcentaje} %`
      };
    });
  }

  eliminarActividad(index: number) {
    this.actividades.splice(index, 1);
  }


  siguientePaso() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/pagina10']);
  }

  regresar() {
    this.router.navigate(['/pagina8']);
  }

}
