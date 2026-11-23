import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  selector: 'app-color-picker',
  styleUrl: './color-picker.scss',
  templateUrl: './color-picker.html',
})

export class ColorPicker {
  @Output() colorSelected = new EventEmitter<string>();

  selectColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.colorSelected.emit(color);
  }
}
