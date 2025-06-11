import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/services/formulario.service';
import { Pagina8Service } from './pagina8.service';

@Component({
  selector: 'app-pagina8',
  templateUrl: './pagina8.component.html',
  styleUrls: ['./pagina8.component.css']
})
export class Pagina8Component implements OnInit {
  datos: any;
  json: any;
  constructor(private pagina8Service: Pagina8Service, private formularioService: FormularioService, private router: Router) { }

  ngOnInit() {
    console.log(this.formularioService.obtenerJSON());
    this.datos = this.formularioService.obtenerDatos();
    console.log(this.datos);
    this.obtenerdata();
    this.obtenerPEA();
  }

  obtenerPEA() {
    this.pagina8Service.getPea(this.datos.distritoSeleccionado).subscribe(response => {
      this.datos.datosobtenidosAPI4 = response;
      console.log(this.datos.datosobtenidosAPI4);
    });
  }

  obtenerdata() {
    const jsonData = this.formularioService.obtenerJSON();
    const codigos = jsonData.map((item: any) => item.CODIGO.toString());
    console.log(codigos);
    const soloNumeros = this.datos.seleccionados.map((item: any) => item.split(' - ')[1]);
    this.pagina8Service.getData(soloNumeros, this.datos.distritoSeleccionado).subscribe(response => {
      console.log(response);
      this.datos.datosobtenidosAPI2 = response;
      const sumData = ((this.datos.datosobtenidosAPI2.pet.totalPet / this.datos.datosobtenidosAPI2.poblacion.totalPobladores) * 100).toFixed(2);
      this.datos.component1Data = `La población en edad de trabajar (PET), tomada desde los 15 años a más, 
      representa un ${sumData}% de la población total, y está soportada en su mayoría por el grupo
       etario de 15 a 29 años, puesto que es el ${this.datos.datosobtenidosAPI2.pet.de15a29Porcentaje}% de la PET, seguido 
       de aquellos entre los 30 a 44 años, que son el ${this.datos.datosobtenidosAPI2.pet.de30a44Porcentaje}%.`;
      this.datos.myComponent = `En la '+ ${this.datos.distritoSeleccionado} +', la población se dedica a 
      actividades de ganadería y de comercio al por menor, por lo que los miembros de las localidades
       forman parte de la PEA, aunque siempre se encuentran en la búsqueda constante de un empleo con 
       mayores posibilidades. De la PEA se tiene los datos a nivel distrital de ${this.datos.distritoSeleccionado} según el INEI:`;
      this.datos.myComponent2 = `La población que habita en la ${this.datos.distritoSeleccionado}
       mantiene una economía primaria ya que vive de su producción ganadera en pequeña escala. 
       También hay pobladores que trabajan como cuidadores de ganado o pastores, así como comerciantes 
       al por menor a través de bodegas o pequeños restaurantes. Por lo tanto, la mayor parte de la 
       población es independiente. Los trabajadores dependientes son solo los maestros de las 
       instituciones educativas del lugar, así como aquellos empleados por la Municipalidad Distrital 
       de Pilpichaca.`;
      this.datos.myComponent3 = `A nivel distrital de ${this.datos.distritoSeleccionado}, se cuenta con 
      que el ingreso familiar per cápita según el informe del PNUD 2019 es de 292.70 soles
       mensuales, ocupando el puesto N°1 450 en el ranking de dicha variable, lo que convierte 
       a dicha jurisdicción en una de las que cuenta con menor ingreso familiar per cápita en 
       todo el país.`;
      this.datos.myComponent4 = `En la ${this.datos.distritoSeleccionado}, el desempleo de los comuneros
      es reducido porque la mayor parte de sus ocupantes trabajan en la ganadería y en el comercio 
      al por menor. Sin embargo, no todo el año están ocupados y el nivel de ingresos no siempre 
      satisfacen sus necesidades. Además de estas actividades, trabajar como pastor para otras 
      familias es algo a lo que los pobladores de la zona se dedican de forma complementaria, 
      así como a trabajos eventuales como obreros. También existen habitantes que se dedican a
       la actividad artesanal, elaborando principalmente pulseras y vestimenta para la venta. 
       Estos son los datos obtenidos a nivel distrital de ${this.datos.distritoSeleccionado}, 
       jurisdicción en la que se engloba el área titulada de la comunidad campesina homónima:`;


    });
  }

  siguientePaso() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/pagina9']);
  }

  regresar() {
    this.router.navigate(['/pagina7']);
  }

  actualizarDatos() {

  }
}
