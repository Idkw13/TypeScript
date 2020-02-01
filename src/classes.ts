export default () => {
  class User {
    name: string;

    constructor(name: string) {
      this.name = name
    }

    getName() {
      return `Hello ${this.name}`
    }
  }

  class Car {
    readonly model: string;
    public color: string;
    protected voice: string = '';

    constructor(theModel?: string) {
      this.model = theModel
    }

    private setVoice(): void {
      console.error('voice')
    }
  }

  class Audi extends Car {
    public setColor(color: string): void {
      this.color = color
    }
  }

  const audi = new Audi();
  audi.setColor('black');

  abstract class Component {
    abstract render(): void
  }

  class Task extends Component {
    render(): void {
      console.error('render')
    }
  }
}
