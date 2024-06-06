import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-added',
  standalone: true,
  imports: [],
  templateUrl: './card-added.component.html',
  styleUrl: './card-added.component.css',
})
export class CardAddedComponent {
  @Output() resetEvent = new EventEmitter();

  onContinue() {
    this.resetEvent.emit();
  }
}
