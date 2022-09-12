import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperiencies : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
      fecha: "2021-2022",
      ubicacion: "Tlilapan.Ver",
      puesto: "Ingeniero en sistemas",
      empresa: "DIF",
      logros:[
        {descripcion: "Creacion de documentos digitales, asesoramiento a empleados,construccion de metodos y componentes importantes para la empresa"},
        {descripcion: "Creacion de metodos faciles para los empleados."}
      ]
    };

    let work2 = {
      fecha: "2020-2021",
      ubicacion: "Tlilapan.Ver",
      puesto: "Complemento de sistemas",
      empresa: "Aple",
      logros:[
        {descripcion: "Coordinar a los equipos de servicios profesionales y ciencia de datos de Aple"},
        {descripcion: "Analizar datos y estadisticas sobre los clientes"}
      ]
    };

    this.workExperiencies.push(work1);
    this.workExperiencies.push(work2);
  }

}
