import { Component, Input, OnInit } from '@angular/core';
import { CounterViewModel } from './counter.viewmodel';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input()
  viewmodel: CounterViewModel;

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  ngOnInit(): void {

  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  onAddClicked(): void {
    this.viewmodel.value += 1
  }

  onMinusClicked(): void {
    this.viewmodel.value -= 1
  }
}
