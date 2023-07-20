import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})

export class FullnamePipe implements PipeTransform {

  transform(name: string, fullname: string): string {
    return `${name} ${fullname}`
  }

}
