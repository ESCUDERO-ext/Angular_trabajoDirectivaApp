import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  //entradas:object[];
  entradas: { titulo: string }[]; // Especificamos que es un array de objetos con la propiedad 'titulo'

  constructor(){
    this.entradas=[
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó pascal?"}
    ];
  }

  registrarUsuario(){

    this.registrado=true;

    this.mensaje="Usuario registrado con éxito"
  }
}
