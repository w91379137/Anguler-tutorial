import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterViewModel } from './counter.viewmodel';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input()
  viewmodel: CounterViewModel;

  @Output()
  submit = new EventEmitter<number>();

  @Output()
  valueChange = new EventEmitter<number>();

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====

  constructor() { }

  ngOnInit(): void {

  }

  // ====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====.====
  onAddClicked(): void {
    this.viewmodel.value += 1
    this.valueChange.emit(1);
  }

  onMinusClicked(): void {
    this.viewmodel.value -= 1
    this.valueChange.emit(-1);
  }

  onSubmitClicked(): void {
    this.submit.emit(this.viewmodel.value);
  }
}
