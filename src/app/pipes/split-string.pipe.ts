import { Pipe, PipeTransform } from '@angular/core';
import { splitString } from '../utils/spiltString';

@Pipe({
  name: 'splitString',
  standalone: true,
})
export class SplitStringPipe implements PipeTransform {
  transform(value: string, atPosition = 4): string {
    return splitString(value, atPosition);
  }
}
