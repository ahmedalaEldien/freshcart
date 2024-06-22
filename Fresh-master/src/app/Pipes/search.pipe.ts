import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../InterFace/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(List: Products[], term: string): any[] {
    return List.filter(el => el.title.toLowerCase().includes(term.toLowerCase()));
  }

}
