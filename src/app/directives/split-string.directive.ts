import { Directive, ElementRef, HostListener } from '@angular/core';
import { splitString } from '../utils/spiltString';

@Directive({
  selector: '[appSplitString]',
  standalone: true,
})
export class SplitStringDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const transformValue = this.transform(input.value.replace(/\s/g, ''));
    input.value = transformValue;
  }

  private transform(value: string): string {
    return splitString(value);
  }
}
