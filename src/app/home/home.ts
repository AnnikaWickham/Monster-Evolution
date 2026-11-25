import { Component, signal } from '@angular/core';
import { Counter } from '../components/counter/counter';
import { Monster } from '../components/monster/monster';
import { ColorPicker } from '../components/color-picker/color-picker';
import { ShapePicker } from '../components/shape-picker/shape-picker';
import { EyePicker } from '../components/eye-picker/eye-picker';
import { MouthPicker } from '../components/mouth-picker/mouth-picker';



@Component({
  imports: [Counter, Monster, ColorPicker, ShapePicker, EyePicker, MouthPicker],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  monsterColor = '#b3f47e';
  monsterShape = "1";
  monsterEyes = "1";
  editComponent = "color";

  updateMonsterColor(color: string) {
    this.monsterColor = color;
  }

  updateMonsterShape(num: string) { //1=square, 2=circle, 3=triangle, 4=spikey, 5=skinny, 6=hump
    this.monsterShape = num;
  }

  updateMonsterEyes(num: string) { //9 different eye choices
    this.monsterEyes = num;
  }

  changeEditComponent(text: string) {
    this.editComponent = text;
  }

}

