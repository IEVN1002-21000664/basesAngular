import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // template: `
  // <div class="container">
  //   <div class="row">
  //     <div class="col-md-12">
  //       <h1>Angular 2 + T</h1>
  //     </div>
  //   </div>
  // </div>
  // `,
})
export class AppComponent {
  title = 'basesAngular';
  dobleNumero = (x:number):number =>{
    return x*2
  }

  alumno={
    nombre: 'Juan',
    edad: 25,
    curso: 'Angular',
    fechaInscrito: new Date(),
    pago: 2220
  }
}
