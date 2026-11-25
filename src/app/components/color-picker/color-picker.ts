import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
  selector: 'app-color-picker',
  styleUrl: './color-picker.scss',
  templateUrl: './color-picker.html',
})

export class ColorPicker {
  @Input() monsterColor = '#b3f47e';
  @Output() colorSelected = new EventEmitter<string>();

  selectColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.colorSelected.emit(color);
  }
}
