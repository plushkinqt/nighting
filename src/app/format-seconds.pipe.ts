import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSeconds'
})
export class FormatSeconds implements PipeTransform {
  times = {
      year: 31557600,
      month: 2629746,
      d: 86400,
      h: 3600,
      m: 60,
      s: 1
  }

  transform(seconds: any, args?: any): any {
    let time_string: string = '';
    let plural: string = '';
    for(var key in this.times){
      if(Math.floor(seconds / this.times[key]) > 0){
        /*if(Math.floor(seconds / this.times[key]) >1 ){
          plural = 's';
        }
        else{
          plural = '';
        }*/
        plural = '';

        time_string += Math.floor(seconds / this.times[key]).toString() + ' ' + key.toString() + plural + ' ';
        seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);

      }
    }
    return time_string;
  }
}
