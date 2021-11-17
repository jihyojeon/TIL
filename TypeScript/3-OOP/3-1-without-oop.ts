{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 10;
  let coffeeBeans: number = 50;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasmilk: false,
    };
  }

  const coffee = makeCoffee(2);
  console.log(coffee);
}
