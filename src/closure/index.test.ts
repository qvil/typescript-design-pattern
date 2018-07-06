import MakeCounter from "./MakeCounter";
import { sum, sumV2 } from "./ScopeChain";

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

  test("Scope Chain", () => {
    expect(sum(1)(2)(3)(4)).toBe(20);

    const s = sumV2(1);
    const s1 = s(2);
    const s2 = s1(3);
    const s3 = s2(4);
    expect(s3).toBe(20);
  });
});
