import { Pipe, PipeTransform } from '@angular/core';
import { iProductos } from './productos';
@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {

  transform(value: iProductos[], args: string): iProductos[] {
    let filter:string=args ? args.toLocaleLowerCase():'';

    return filter? value.filter((product:iProductos)=>
      product.Marca.toLocaleLowerCase().indexOf(filter)!=-1
  ):value;
  }

}
