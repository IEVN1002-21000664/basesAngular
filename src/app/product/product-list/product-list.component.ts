import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productos:any[]=[
    {
      "productoId": 1,
      "Modelo": "Sentra",
      "Descripcion": "4 puertas",
      "Precio": 20000,
      "Year": 2023,
      "Marca": "Nissan",
      "Color": "Azul",
      "imagenUrl": ""
    },
    {
      "productoId": 1,
      "Modelo": "A4",
      "Descripcion": "4 puertas",
      "Precio": 20000,
      "Year": 2023,
      "Marca": "AUDI",
      "Color": "Blanco",
      "imagenUrl": ""
    },
    {
      "productoId": 1,
      "Modelo": "Rio",
      "Descripcion": "4 puertas",
      "Precio": 150000,
      "Year": 2020,
      "Marca": "KIA",
      "Color": "Azul",
      "imagenUrl": ""
    },
    

  ]
}
