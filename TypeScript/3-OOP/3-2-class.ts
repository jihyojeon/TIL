{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  class CoffeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 10; // class level
    coffeeBeans: number = 0; // instance level

    constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeMaker {
      // 이게 있어야 파이썬처럼 쓸 수 있겠구만...
      return new CoffeMaker(coffeeBeans);
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

  const maker = new CoffeMaker(50);
  console.log(maker);
  const coffee = maker.makeCoffee(2);
  console.log(coffee);
  console.log(CoffeMaker.makeMachine(100).makeCoffee(2));
}
