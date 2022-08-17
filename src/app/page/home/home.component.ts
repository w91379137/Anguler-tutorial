import { Component, OnInit } from '@angular/core';
import { HomeViewModel } from './home.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viewmodel = new HomeViewModel();

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  ngOnInit(): void { }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  color1(): string {
    return `rgb(${this.viewmodel.r1.value}, ${this.viewmodel.g1.value}, ${this.viewmodel.b1.value})`
  }
  color2(): string {
    return `rgb(${this.viewmodel.r2}, ${this.viewmodel.g2}, ${this.viewmodel.b2})`
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  onEmit(event): void {
    console.log('onEmit', event)
  }

  onRchange(event): void {
    this.viewmodel.r2 += event
  }

  onGchange(event): void {
    this.viewmodel.g2 += event
  }

  onBchange(event): void {
    this.viewmodel.b2 += event
  }

}
