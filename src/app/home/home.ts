import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';
import { Monster } from '../components/monster/monster';


@Component({
  imports: [Greeting, Counter, Monster],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  greetingMessage = signal("Hello, I'm from home!");

  keyUpHandeler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
