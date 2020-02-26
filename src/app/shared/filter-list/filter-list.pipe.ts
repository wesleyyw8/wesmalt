import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList',
  pure: true
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], filter): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
  }

}
