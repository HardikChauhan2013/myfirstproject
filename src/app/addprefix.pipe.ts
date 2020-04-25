import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addprefix'
})
export class AddprefixPipe implements PipeTransform {

  transform(value: String, args: String): unknown {
    //return "Hi " + value;
    return args + ' ' + value;
  }

}
