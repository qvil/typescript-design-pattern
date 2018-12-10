/**
 * Book Factory
 */
abstract class AbstractBookFactory {
  abstract createJSBook(): AbstractJSBook;
  // abstract createTSBook(): AbstractTSBook;
}

class QvilBookFactory extends AbstractBookFactory {
  createJSBook() {
    return new AbstractJSBook(); // error TS2511: Cannot create an instance of an abstract class.
  }
  createTSBook() {
    return "ts";
  }
}

/**
 * Book
 */
abstract class AbstractBook {
  abstract getAuthor(): string;
  abstract getTitle(): string;
}
abstract class AbstractJSBook extends AbstractBook {
  // constructor(value: string) {
  //   super();
  //   console.log(value);
  // }

  getTitle() {
    return this.title;
  }

  private title = "Javscript";
}
