import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit {
formulario!: FormGroup;
resultado!:number;

constructor(){}
ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl('', Validators.required),
      numero2: new FormControl('', Validators.required),

    })

}
sumarNumeros():void{
  const n1 = this.formulario.get('numero1')?.value;

  const n2 = this.formulario.get('numero2')?.value;
  this.resultado=n1+n2
}
}
