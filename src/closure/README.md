# [Closure](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)

## 클로저를 이용해서 프라이빗 메소드 (private method) 흉내내기

### MDN

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```

### 내 의견

```ts
class MakeCounter {
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
```

> Private method 는 그냥 class 쓰면 되는데 굳이 사용하는 이유는 뭘까?

참고

- https://medium.com/engineering-livestream/javascript-classes-vs-closures-cf6d6c1473f
