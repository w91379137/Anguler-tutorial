import { CounterViewModel } from "src/app/component/counter/counter.viewmodel";

export class HomeViewModel {

  // 第一種
  r1 = new CounterViewModel()
  g1 = new CounterViewModel()
  b1 = new CounterViewModel()

  // 第二種
  r2 = 0
  g2 = 0
  b2 = 0
}
