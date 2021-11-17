{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  // public <- default / can access from outside
  // private <- no one can access
  // protected <- child class can access
  class CoffeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 10;
    coffeeBeans: number = 0;

    private constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
      return new CoffeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('Value for beans should be positive!');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasmilk: false,
      };
    }
  }

  const maker = CoffeMaker.makeMachine(50);
  console.log(maker);
  maker.fillCoffeeBeans(10);
  console.log(maker);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private privateAge = 26;
    get age(): number {
      return this.privateAge;
    }

    set age(num: number) {
      this.privateAge = num;
    }

    constructor(public firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User('Jihyo', 'Jeon');
  console.log(user.fullName);
  user.firstName = 'Cori';
  console.log(user.fullName);
  console.log(user.age); // age before
  console.log((user.age = 27)); // age updated
}
