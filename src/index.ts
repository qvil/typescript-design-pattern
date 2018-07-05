import MakeCounter from "./closure/MakeCounter";

const counter1 = new MakeCounter();
const counter2 = new MakeCounter();

counter1.increment();
counter1.increment();
console.log(counter1.value());
counter2.increment();
console.log(counter2.value());
