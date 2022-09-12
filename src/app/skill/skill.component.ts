import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let sk = {
      element: "Trabajo en equipo",
      
    };
    let sk1 = {
      element: "Organizacion de archivos",
      
    };
    let sk2 = {
      element: "Orientado a objetivos",
      
    };
    let sk3 = {
      element: "Centrado en el futuro",
      
    };
    let sk4 = {
      element: "Pensamiento Crítico",
      
    };
    let sk5 = {
      element: "Resiliencia",
      
    };
    let sk6 = {
      element: " Comunicación verbal y escrita",
      
    };
    let sk7 = {
      element: "Liderazgo",
      
    };
    let sk8 = {
      element: "Creatividad",
      
    };
    let sk9 = {
      element: "Disposición de tiempo",
      
    };
    this.skill.push(sk);
    this.skill.push(sk1);
    this.skill.push(sk2);
    this.skill.push(sk3);
    this.skill.push(sk4);
    this.skill.push(sk5);
    this.skill.push(sk6);
    this.skill.push(sk7);
    this.skill.push(sk8);
    this.skill.push(sk9);

  }

}
