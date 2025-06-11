import { Injectable } from '@angular/core';

interface DatosJSON {
  DPTO: string;
  PROV: string;
  DIST: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  datos: any = {
    projectName: '',
    departamentoSeleccionado: '',
    provinciaSeleccionada: '',
    distritoSeleccionado: '',
    detalleProyecto: '',
    aisdComponente1: '',
    aisdComponente2: '',
    aisiComponente1: '',
    aisiComponente2: '',
    seleccionados: [],
    seleccionadosAISI: [],
    cantidadEntrevistas: '',
    cantidadEncuestas: '',
    fechaTrabajoCampo: '',
    componenteFuentesPrimarias1: '',
    componenteFuentesPrimarias2: '',
    justificacionAISI: '',
    pagina4DistDpto: '',
    consultora: '',
    entrevistados: [],
    muestra: '',
    universo: '',
    margen: '',
    nameuniverso: '',
    variable: '',
    fuente: '',
    nivel: '',
    detalleEncuesta: '',
    precisionEncuesta: '',
    encuestadoPorcentaje: '',
    noEncuestados: '',
    noResultadoPorcentaje: '',
    influenciaSocialDirecta: '',
    componente1Pagina5: '',
    descripcionTabla: '',
    componente2Pagina5: '',
    tablepagina6: [],
    imagenes: [],
    poblacionSexo: '',
    poblacionEtarios: '',
    codigos: [],
    datosobtenidosAPI: [],
    datosobtenidosAPI2: [],
    detallePET: '',
    detallePetDistrital: '',
    detallePeaDistrital: '',
    detallePeaEmpleo1: '',
    encuestasIndependiente: '',
    encuestasDependientePublica: '',
    encuestasDependientePrivada: '',
    encuestasNoAplica: '',
    detallePeaSituacionEmpleo: '',
    detalleIngresos: '',
    ingresosMensualesPromedio: '',
    ingresosMaximo: '',
    detalleIndiceDesempleo: '',
    component1Data: '',
    myComponent: '',
    myComponent2: '',
    myComponent3: '',
    myComponent4: '',
    detalleCaracteristicasEconomicas: '',
    detalleCaracteristicasEconomicas2: '',
    encuestasNoAplicaPagina9: '',
    tablepagina9: [],
    datosobtenidosAPI3: [],
    viviendasComponent1: '',
    viviendasComponent2: '',
    totalViviendas: '',
    totalViviendasOcupadas: '',
    porcentajeViviendasOcupadas: '',
    imagenes2: [],
    datosobtenidosAPI4: {},
  };

  jsonData: any[] = [];

  actualizarDatos(nuevosDatos: any) {
    this.datos = { ...this.datos, ...nuevosDatos };
  }

  obtenerDatos() {
    return this.datos;
  }

  guardarJSON(data: any) {
    this.jsonData = data;
  }

  obtenerJSON(): DatosJSON[] {
    return this.jsonData;
  }

}
