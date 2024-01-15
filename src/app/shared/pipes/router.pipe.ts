import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'routerPipe'
})
export class routerPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    let result = value
    if(value === 'Login'){
      result = 'Sair';
    }
    return result;
  }

}
