import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-monster',
  styleUrl: './monster.scss',
  templateUrl: './monster.html',
})
export class Monster {
  @Input() color = '#b3f47e';
}
