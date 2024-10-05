import { Component } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      color1: ['', Validators.required],
      color2: ['', Validators.required],
      color3: ['', Validators.required],
      tolerancia: ['', Validators.required]
    });

    this.resistenciaForm.valueChanges.subscribe(() => {
      this.actualizarResistencia();
    });
  }

  getColorClass(color: string) {
    switch (color) {
      case 'Negro': return 'bg-dark text-white';
      case 'Café': return 'bg-brown text-white'; 
      case 'Rojo': return 'bg-danger text-white';
      case 'Naranja': return 'bg-orange text-white'; 
      case 'Amarillo': return 'bg-warning text-dark';
      case 'Verde': return 'bg-success text-white';
      case 'Azul': return 'bg-primary text-white';
      case 'Violeta': return 'bg-violet text-white'; 
      case 'Gris': return 'bg-secondary text-white';
      case 'Blanco': return 'bg-light text-dark';
      default: return '';
    }
  }

  registrarResistencia() {
    const { color1, color2, color3, tolerancia } = this.resistenciaForm.value;
    const valor = this.calcularValor(color1, color2, color3);
    
    const porcentaje = tolerancia === 'Oro' ? 0.05 : 0.10; 
    const valorMaximo = valor * (1 + porcentaje);
    const valorMinimo = valor * (1 - porcentaje);

    if (this.resistencias.length === 0) {
      this.resistencias.push({ color1, color2, color3, tolerancia, valor, valorMaximo, valorMinimo });
    } else {
      this.resistencias[0] = { color1, color2, color3, tolerancia, valor, valorMaximo, valorMinimo };
    }
  }

  actualizarResistencia() {
    const { color1, color2, color3, tolerancia } = this.resistenciaForm.value;
    const valor = this.calcularValor(color1, color2, color3);
    
    const porcentaje = tolerancia === 'Oro' ? 0.05 : 0.10; 
    const valorMaximo = valor * (1 + porcentaje);
    const valorMinimo = valor * (1 - porcentaje);

    if (this.resistencias.length > 0) {
      this.resistencias[0] = { color1, color2, color3, tolerancia, valor, valorMaximo, valorMinimo };
    }
  }

  calcularValor(color1: Color, color2: Color, color3: Color): number {
    return (this.valores[color1] * 10 + this.valores[color2]) * Math.pow(10, this.valores[color3]);
  }
}
