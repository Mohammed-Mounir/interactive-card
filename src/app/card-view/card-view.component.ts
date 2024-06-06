import { Component, Input } from '@angular/core';
import { ICard } from '../model/card.model';
import { SplitStringPipe } from '../pipes/split-string.pipe';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [SplitStringPipe],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css',
})
export class CardViewComponent {
  @Input() cardFormValues: null | ICard = null;

  cardNumberPlaceholder = '0000000000000000';
  namePlaceholder = 'Jane Appleseed';
  expMonthPlaceholder = '00';
  expYearPlaceholder = '00';
  cvcPlaceholder = '000';
}
