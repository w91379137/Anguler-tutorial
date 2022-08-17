import { CounterViewModel } from "src/app/component/counter/counter.viewmodel";

export class HomeViewModel {

  // 第一種
  r1 = new CounterViewModel(128)
  g1 = new CounterViewModel(128)
  b1 = new CounterViewModel(128)

  // 第二種
  r2 = 128
  g2 = 128
  b2 = 128
}
