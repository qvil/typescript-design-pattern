import Singleton from "./Singleton";
import HeroFactory from "./FactoryMethod";

const singleton = new Singleton();
const singleton2 = new Singleton();

console.log(singleton.getText); // I'm only one.
singleton2.setText("I'm second.");
console.log(singleton.getText, singleton2.getText); // I'm second. I'm second.

const heroFactory = new HeroFactory();
const hero = heroFactory.createHero("ironman");
hero.sayHi(); // I'm Ironman., from Earth.
