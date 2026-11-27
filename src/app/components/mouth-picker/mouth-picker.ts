import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Monster } from '../monster/monster';

@Component({
  imports: [Monster],
  selector: 'app-mouth-picker',
  styleUrl: './mouth-picker.scss',
  templateUrl: './mouth-picker.html',
})
export class MouthPicker {
  @Input() monsterColor = '#b3f47e';
  @Input() monsterShape = "1";
  @Input() monsterEyeNum = "1";
  @Input() monsterMouthNum = "1";

  @Output() mouthSelected = new EventEmitter<string>();

  selectMouth(num: string) {
    this.mouthSelected.emit(num);
  }
}
