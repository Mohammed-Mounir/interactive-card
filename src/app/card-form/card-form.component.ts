import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SplitStringPipe } from '../pipes/split-string.pipe';
import { SplitStringDirective } from '../directives/split-string.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SplitStringPipe,
    SplitStringDirective,
    CommonModule,
  ],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent implements OnInit {
  @Output() cardFormEvent = new EventEmitter();
  @Output() submittedEvent = new EventEmitter();

  cardForm = new FormGroup({
    cardholderName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z\s]{2,}$/),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9\s]+$/),
    ]),
    expDateInMonth: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])$/),
    ]),
    expDateInYear: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[23]\d$/),
    ]),
    cvc: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{3}$/),
    ]),
  });

  ngOnInit(): void {
    this.cardForm.valueChanges.subscribe((values) => {
      this.cardFormEvent.emit(values);
    });
  }

  get cardholderName() {
    return this.cardForm.get('cardholderName');
  }

  get cardNumber() {
    return this.cardForm.get('cardNumber');
  }

  get expDateInMonth() {
    return this.cardForm.get('expDateInMonth');
  }

  get expDateInYear() {
    return this.cardForm.get('expDateInYear');
  }

  get cvc() {
    return this.cardForm.get('cvc');
  }

  onSubmit() {
    this.submittedEvent.emit();
  }
}
