import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyFormat'
})
export class KeyFormatPipe implements PipeTransform {

  transform(value: string): string {
    value = value.split("_").join(" ")
    return value;
  }

}
