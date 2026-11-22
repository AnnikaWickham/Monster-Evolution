import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';
import { Monster } from '../components/monster/monster';
import { ColorPicker } from '../components/color-picker/color-picker';


@Component({
  imports: [Greeting, Counter, Monster, ColorPicker],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  greetingMessage = signal("Hello, I'm from home!");
  monsterColor = '#b3f47e';

  updateMonsterColor(color: string) {
    this.monsterColor = color;
  }
}
// TRYING TO SEND COLOR DATA FROM COLOR PICKER TO MONSTER 