import { Component, OnInit } from '@angular/core';
import { CounterViewModel } from 'src/app/component/counter/counter.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vm = new CounterViewModel();

  constructor() {
    this.vm.value = 100;
  }

  ngOnInit(): void {
  }

}
