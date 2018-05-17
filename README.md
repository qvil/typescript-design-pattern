# Typescript Design Pattern

Design pattern with Typescript

## Table Of Content

<!-- TOC -->

* [Typescript Design Pattern](#typescript-design-pattern)
  * [Table Of Content](#table-of-content)
  * [Install](#install)
  * [Run](#run)
  * [Abstract Factory](#abstract-factory)
  * [Factory Method](#factory-method)
  * [Singleton](#singleton)
  * [Adapter](#adapter)
  * [Composite](#composite)
  * [Decorator](#decorator)
  * [Proxy](#proxy)
  * [Command](#command)
  * [Observer](#observer)
  * [Strategy](#strategy)
  * [Template Method](#template-method)

<!-- /TOC -->

## Install

```
npm install
```

## Run

```
npm start
```

## Abstract Factory

## Factory Method

## Singleton

Singleton.ts

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
