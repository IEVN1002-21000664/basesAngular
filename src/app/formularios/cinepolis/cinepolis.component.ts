import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  formulario!: FormGroup;
  totalPagar: number = 0;
  mensaje: string = '';
  precioBoleto: number = 12.00;
  maxBoletosPorPersona: number = 7;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      nPersonas: new FormControl(1, [Validators.required, Validators.min(1)]),
      nBoletos: new FormControl(1, [Validators.required, Validators.min(1)]),
      tarjeta: new FormControl(false)
    });

    // Escucha cambios en nPersonas para ajustar la validación de nBoletos
    this.formulario.get('nPersonas')?.valueChanges.subscribe(value => {
      this.actualizarValidacionBoletos(value);
    });
  }

  actualizarValidacionBoletos(nPersonas: number) {
    const maxBoletos = nPersonas * this.maxBoletosPorPersona;
    this.formulario.get('nBoletos')?.setValidators([
      Validators.required,
      Validators.min(1),
      Validators.max(maxBoletos)
    ]);
    this.formulario.get('nBoletos')?.updateValueAndValidity();
  }

  calcularTotal() {
    const nBoletos = this.formulario.get('nBoletos')?.value;
    const nPersonas = this.formulario.get('nPersonas')?.value;
    const maxBoletos = nPersonas * this.maxBoletosPorPersona;
    let total = this.precioBoleto * nBoletos;
    let descuento = 0;

    if (nBoletos > 5) {
      descuento = 0.15;
    } else if (nBoletos >= 3) {
      descuento = 0.10;
    }

    total = total - (total * descuento);

    if (this.formulario.get('tarjeta')?.value) {
      total = total - (total * 0.10);
    }

    if (nBoletos > maxBoletos) {
      this.mensaje = `No se pueden comprar más de ${maxBoletos} boletos para ${nPersonas} persona(s).`;
      total = 0;
    } else {
      this.mensaje = '';
    }

    this.totalPagar = total;
  }
}
