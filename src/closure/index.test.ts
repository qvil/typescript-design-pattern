import MakeCounter from "./MakeCounter";

describe("Closure Test", () => {
  test("MakeCounter Test", () => {
    const counter1 = new MakeCounter();
    const counter2 = new MakeCounter();

    counter1.increment();
    counter1.increment();
    counter2.increment();
    expect(counter1.value()).toBe(2);
    expect(counter2.value()).toBe(1);
  });
});
