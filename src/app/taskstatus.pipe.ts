import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskstatus'
})
export class TaskstatusPipe implements PipeTransform {

  transform(value: any): unknown {
    return value.complate == true ? 'Done' : 'In Progress';
  }

}
