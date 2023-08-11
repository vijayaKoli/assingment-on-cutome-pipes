import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'high'
})
export class HighPipe implements PipeTransform {

  transform(value: string, citycode: string): string {
    
    if(citycode === 'kl')
    {
      return 'The Big Apple';
    }
  
  else{
       return 'Garden City';
  }
}
}


