import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censor'
})
export class CensorPipe implements PipeTransform {
  nvalue : string = "";
  transform(value: any, ...args: any): any {
    var re = /malik/gi
    this.nvalue = value.replaceAll(re,"wibu");
    return this.nvalue;
  }
}
