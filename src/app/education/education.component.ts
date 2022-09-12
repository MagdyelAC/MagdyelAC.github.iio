import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let edu1 ={
      fecha: "2015-2017",
      nivel:"Ingeniero en software",
      uni: "Universidad Veracruzana"
  };

  let edu2 ={
    fecha: "2018-2020",
    nivel:"Licenciatura en programacion",
    uni: "Universidad del Golfo de Mexico"
};

this.education.push(edu1);
this.education.push(edu2);

}

}
