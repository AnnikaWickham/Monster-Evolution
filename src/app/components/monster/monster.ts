import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-monster',
  styleUrl: './monster.scss',
  templateUrl: './monster.html',
})
export class Monster {
  @Input() color = '#b3f47e';
  @Input() shape = "1";

  getShape(): string {
    if (this.shape === "1") {
      return "square";
    } else if (this.shape === "2") {
      return "circle";
    } else if (this.shape === "3") {
      return "triangle";
    } else if (this.shape === "4") {
      return "spikey";
    } else if (this.shape === "5") {
      return "skinny";
    } else {
      return "hump";
    }
  }
}
