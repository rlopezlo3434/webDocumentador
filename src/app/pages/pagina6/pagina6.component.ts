import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/services/services/formulario.service';

@Component({
  selector: 'app-pagina6',
  templateUrl: './pagina6.component.html',
  styleUrls: ['./pagina6.component.css']
})
export class Pagina6Component {
  datos: any;
  json: any;

  images: { name: string, url: string }[] = []; // Lista de imágenes cargadas
  imageName: string = ""; // Nombre de la imagen
  selectedImageUrl: string | null = null; // Guarda la imagen temporalmente

  tablepagina6 = [
    { categoria: "Programas Sociales", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Municipio", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Empresa de transportes", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Delegación Policial", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Comercializadora de insumos agropecuarios", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Instituciones que dan asistencia técnica agropecuaria", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Estructura para mercado o feria", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Oficina de radio emisoras y canales de televisión", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Infraestructura eléctrica", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Infraestructura de agua y desagüe", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Iglesias", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Telefonía móvil", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Agentes de entidades financieras", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Empresas mineras", respuesta: "", nombre: "", comentario: "" },
    { categoria: "Empresas de exploración minera", respuesta: "", nombre: "", comentario: "" }
  ];

  constructor(private formularioService: FormularioService, private router: Router) {
    this.datos = this.formularioService.obtenerDatos();
    console.log(this.formularioService.obtenerJSON());
    console.log("Datos guardados:", this.datos.tablepagina6);
    this.json = this.formularioService.obtenerJSON();

    this.formularioService.actualizarDatos(this.datos);
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


  guardarDatos() {
    console.log("Datos guardados:", this.tablepagina6);
    this.datos.tablepagina6 = this.tablepagina6
    this.formularioService.actualizarDatos(this.datos);
    console.log(this.formularioService.obtenerDatos());

  }

  siguientePaso() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/pagina7']);
  }

  regresar() {
    this.router.navigate(['/pagina5']);
  }

  resumen() {
    this.formularioService.actualizarDatos(this.datos);
    this.router.navigate(['/resumen']);
  }
} 
