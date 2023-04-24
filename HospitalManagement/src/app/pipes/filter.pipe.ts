import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterData'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){
      return null;
    }
    if(!args){
      return value;
    }

    args = args.toLowerCase();
    return value.filter(function(item:any){
      return (item.name.toLowerCase().includes(args) | item.doctorname.toLowerCase().includes(args) | item.email.toLowerCase().includes(args) | item.number.toLowerCase().includes(args));
    })
  }
}
