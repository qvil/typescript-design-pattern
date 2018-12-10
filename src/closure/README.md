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

> > 자문자답: 클로저는 스코프 문제로 사용하는 경우가 있음. 클로저를 사용하지 않으면 자바스크립트 변수가 var로 선언되거나 function이 파일 전체에서 중복되는 문제가 생겨서 이를 방지하기 위해서 클로저를 사용함.

참고

- https://medium.com/engineering-livestream/javascript-classes-vs-closures-cf6d6c1473f
