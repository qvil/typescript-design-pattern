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
