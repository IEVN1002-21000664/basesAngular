import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Definir los colores como un tipo literal
type Color = 'Negro' | 'Café' | 'Rojo' | 'Naranja' | 'Amarillo' | 'Verde' | 'Azul' | 'Violeta' | 'Gris' | 'Blanco';

interface Resistencia {
  color1: Color;
  color2: Color;
  color3: Color;
  tolerancia: string;
  valor: number;
  valorMaximo: number;
  valorMinimo: number;
}

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  resistencias: Resistencia[] = [];
  resistenciaForm: FormGroup;
  colores: Color[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  tolerancias: string[] = ['Oro', 'Plata'];

  // El objeto 'valores' tiene las claves de los colores con los valores correspondientes
  valores: { [key in Color]: number } = {
    'Negro': 0,
    'Café': 1,
    'Rojo': 2,
    'Naranja': 3,
    'Amarillo': 4,
    'Verde': 5,
    'Azul': 6,
    'Violeta': 7,
    'Gris': 8,
    'Blanco': 9
  };

  constructor(private fb: FormBuilder) {
    this.resistenciaForm = this.fb.group({
      color1: ['Negro'],
      color2: ['Negro'],
      color3: ['Negro'],
      tolerancia: ['Oro']
    });
  }

  getColorClass(color: string) {
    switch (color) {
      case 'Negro': return 'bg-dark text-white';
      case 'Café': return 'bg-brown text-white'; // Define 'brown' en el CSS
      case 'Rojo': return 'bg-danger text-white';
      case 'Naranja': return 'bg-orange text-white'; // Define 'orange' en el CSS
      case 'Amarillo': return 'bg-warning text-dark';
      case 'Verde': return 'bg-success text-white';
      case 'Azul': return 'bg-primary text-white';
      case 'Violeta': return 'bg-violet text-white'; // Define 'violet' en el CSS
      case 'Gris': return 'bg-secondary text-white';
      case 'Blanco': return 'bg-light text-dark';
      default: return '';
    }
  }

  registrarResistencia() {
    const { color1, color2, color3, tolerancia } = this.resistenciaForm.value;
    const valor = this.calcularValor(color1, color2, color3);
    const valorMaximo = valor * 1.05;  // Suponiendo una tolerancia de 5%
    const valorMinimo = valor * 0.95;

    this.resistencias.push({ color1, color2, color3, tolerancia, valor, valorMaximo, valorMinimo });
    this.resistenciaForm.reset(); // Restablecer el formulario después de registrar
  }

  calcularValor(color1: Color, color2: Color, color3: Color): number {
    return (this.valores[color1] * 10 + this.valores[color2]) * Math.pow(10, this.valores[color3]);
  }
}
