import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardFormComponent } from './card-form/card-form.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ICard } from './model/card.model';
import { CardAddedComponent } from './card-added/card-added.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardFormComponent,
    CardViewComponent,
    CardAddedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cardFormValues: null | ICard = null;
  cardSubmitted = false;

  onCardFormValueChanged(cardFormValues: ICard) {
    this.cardFormValues = {
      ...cardFormValues,
      cardNumber: cardFormValues.cardNumber.replaceAll(' ', ''),
    };
  }

  onCardSubmit() {
    this.cardSubmitted = true;
  }

  onCardReset() {
    this.cardFormValues = null;
    this.cardSubmitted = false;
  }
}
