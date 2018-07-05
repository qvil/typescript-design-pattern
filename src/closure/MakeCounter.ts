export default class MakeCounter {
  private counter: number = 0;

  public changeBy(val: number): void {
    this.counter += val;
  }

  public increment() {
    this.changeBy(1);
  }

  public decrement() {
    this.changeBy(-1);
  }

  public value() {
    return this.counter;
  }
}
