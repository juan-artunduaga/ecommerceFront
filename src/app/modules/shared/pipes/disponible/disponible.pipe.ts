import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disponible'
})
export class DisponiblePipe implements PipeTransform {

  transform(value: number): string {
    if(value>=1)return "Disponible";
    else return "Agotado";
    
  }

}
