import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/services/formulario.service';

@Component({
  selector: 'app-pagina10',
  templateUrl: './pagina10.component.html',
  styleUrls: ['./pagina10.component.css']
})
export class Pagina10Component implements OnInit {
  datos: any;
  json: any;
  selectedImageUrl: string | null = null; // Guarda la imagen temporalmente
  imageName: string = ""; // Nombre de la imagen

  constructor(private formularioService: FormularioService, private router: Router) { }


  ngOnInit() {
    this.datos = this.formularioService.obtenerDatos();
    console.log(this.datos);

    this.datos.viviendasComponent1 = 'en los “centros poblados” en estudio';

    this.datos.estructuraComponent1 = 'Según el INEI, el material más usado para las paredes de las viviendas' +
    'dentro de la CAHUACHO es la Tapia ' + this.datos.distritoSeleccionado +', seguido de la Piedra con barro (' + this.datos.porcentaje1 +') y del Ladrillo o bloque de cemento (' + this.datos.porcentaje1 +').'

    this.datos.estructuraComponent2 = 'Según el INEI, el material más usado para las paredes de las viviendas' +
    'dentro de la CAHUACHO es la Tapia ' + this.datos.distritoSeleccionado +', seguido de la Piedra con barro (' + this.datos.porcentaje1 +') y del Ladrillo o bloque de cemento (' + this.datos.porcentaje1 +').'

    this.datos.estructuraComponent3 = 'Según el INEI, el material más usado para las paredes de las viviendas' +
    'dentro de la CAHUACHO es la Tapia ' + this.datos.distritoSeleccionado +', seguido de la Piedra con barro (' + this.datos.porcentaje1 +') y del Ladrillo o bloque de cemento (' + this.datos.porcentaje1 +').'
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageUrl = e.target.result; // Guarda la imagen temporalmente
      };
      reader.readAsDataURL(file);
    }
  }

  guardarImagen() {
    if (!this.selectedImageUrl) {
      alert("Por favor, seleccione un archivo.");
      return;
    }
    if (!this.imageName.trim()) {
      alert("Por favor, escriba un nombre para la imagen.");
      return;
    }

    this.datos.imagenes2.push({ name: this.imageName, url: this.selectedImageUrl});

    this.imageName = "";
    this.selectedImageUrl = null;
  }

  siguientePaso() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/resumen']);
  }

  regresar() {
    this.router.navigate(['/pagina9']);
  }
}
