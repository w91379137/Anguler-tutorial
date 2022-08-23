import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeViewModel } from './home.viewmodel';


interface 持有機票 {
  告知未登機(): void
  告知登機() : void
  告知下飛機() : void
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, 持有機票, OnDestroy {

  viewmodel = new HomeViewModel();
  isShow = true

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  ngOnInit(): void {
    console.log('HomeComponent ngOnInit')
  }

  告知未登機() {
    console.log('告知未登機')
  }

  告知登機() {
    console.log('告知登機')
  }

  告知下飛機() {
    console.log('告知下飛機')
  }

  ngOnDestroy(): void {
    console.log('HomeComponent ngOnDestroy')
  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  changeShow() {
    this.isShow = !this.isShow;
  }

  isHidden() {
    return !this.isShow;
  }

  color1(): string {
    console.log('color1');
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

function 通知乘客(person) {

  person.告知下飛機()
  person.wdijwoidjw()

}
