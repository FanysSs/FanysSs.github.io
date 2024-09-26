import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
workExperience : Array<any> = [];
ngOnInit(): void {
  let work1 = {
    fecha: "2022-2023",
    ubicacion: "Orizaba, Veracruz",
    puesto: "Atención al cliente y gestor de ventas",
    empresa: "The sokks",
    logros : [
      {descripcion: "Creacion de un sistema de gestion de ventas con guias de envio automaticas"},
      {descripcion: "Gestion de pedidos y rastreo de envios"},
      {descripcion: "Atencion al cliente excelente"}
    ]
  };
  
  let work2 = {
    fecha: "2023-2024",
    ubicacion: "Orizaba, Veracruz",
    puesto: "Frontend Developer",
    empresa: "Ecommerce S.A. de C.V.",
    logros : [
      {descripcion: "Creación de un URM para gestionar los proyectos de Ecommerce"},
      {descripcion: "Creación de más de 100 paginas web para Pymes"},
    ]
  };

  this.workExperience.push(work1);
  this.workExperience.push(work2);
  console.log(this.workExperience);
}
}
