import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Monster } from '../monster/monster';

@Component({
  imports: [Monster],
  selector: 'app-eye-picker',
  styleUrl: './eye-picker.scss',
  templateUrl: './eye-picker.html',
})
export class EyePicker {
  @Input() monsterColor = '#b3f47e';
  @Input() monsterShape = "1";
  @Input() monsterEyeNum = "1";
  @Input() monsterMouthNum = "1";

  @Output() eyesSelected = new EventEmitter<string>();

  selectEyes(num: string) {
    this.eyesSelected.emit(num);
  }
}
