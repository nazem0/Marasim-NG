import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToSpace'
})
export class NullToSpacePipe implements PipeTransform {
  transform(value: string): string {
    if (value == null) {
      return '';
    } else if (value == "null") {
      return '';
    } else {
      return value;
    }
  }
}