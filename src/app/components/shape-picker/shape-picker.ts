import { Component, Input, Output } from '@angular/core';
import { Monster } from '../monster/monster';
import { EventEmitter } from '@angular/core';

@Component({
  imports: [Monster],
  selector: 'app-shape-picker',
  styleUrl: './shape-picker.scss',
  templateUrl: './shape-picker.html',
})
export class ShapePicker {
  @Input() monsterColor = '#b3f47e';
  @Input() monsterShape = "1";
  @Input() monsterEyeNum = "1";

  @Output() shapeSelected = new EventEmitter<string>();

  selectShape(num: string) {
    this.shapeSelected.emit(num);
  }
}
