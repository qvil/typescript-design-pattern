# Typescript Design Pattern

Design pattern with Typescript

## Table Of Contents

- [ ] [Abstract Factory](#abstract-factory)
- [x] [Factory Method](#factory-method)
- [x] [Singleton](#singleton)
- [ ] [Adapter](#adapter)
- [ ] [Composite](#composite)
- [ ] [Decorator](#decorator)
- [ ] [Proxy](#proxy)
- [ ] [Command](#command)
- [ ] [Observer](#observer)
- [ ] [Strategy](#strategy)
- [ ] [Template Method](#template-method)
- [ ] [Closure](#closure)

## Install

```
npm install
```

## Run

```
npm start
```

## Reference

https://sourcemaking.com/design_patterns

## Abstract Factory

## Factory Method

FactoryMethod.ts

```ts
interface Hero {
  sayHi(): void;
}

interface Factory {
  createHero(name: string): Hero;
}

class Ironman implements Hero {
  sayHi(): void {
    console.log(`I'm Ironman., from Earth.`);
  }
}

class Thor implements Hero {
  sayHi(): void {
    console.log(`I'm Thor, from Asgard.`);
  }
}

export default class HeroFactory implements Factory {
  createHero(name) {
    switch (name) {
      case "ironman":
        return new Ironman();
      case "thor":
        return new Thor();
      default:
        return undefined;
    }
  }
}
```

test.ts

```ts
import HeroFactory from "./FactoryMethod";

const heroFactory = new HeroFactory();
const hero = heroFactory.createHero("ironman");
hero.sayHi(); // I'm Ironman., from Earth.
```

## Singleton

[Singleton.ts](src/singleton.ts)

```ts
export default class Singleton {
  private static instance: Singleton;
  private _text: string = "I'm only one.";

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  public get getText(): string {
    return this._text;
  }

  public setText(text: string): void {
    this._text = text;
  }
}
```

test.ts

```ts
import Singleton from "./Singleton";

const singleton = new Singleton();
const singleton2 = new Singleton();

console.log(singleton.getText); // I'm only one.
singleton2.setText("I'm second.");
console.log(singleton.getText, singleton2.getText); // I'm second. I'm second.
```

## Adapter

## Composite

## Decorator

## Proxy

## Command

## Observer

## Strategy

## Template Method

## [Closure](src/closure/README.md)
