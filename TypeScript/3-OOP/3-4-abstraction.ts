{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 10;
    coffeeBeans: number = 0;

    private constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    clean(): void {
      console.log('Cleaning...');
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('Value for beans should be positive!');
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`Grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log('Heating up!');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasmilk: false,
      };
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(50);
  console.log(maker);
  maker.fillCoffeeBeans(10);
  console.log(maker);

  // interface가 타입이 되는구만...
  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(50);
  console.log(maker2);
  maker2.clean();

  const maker3: CoffeeMaker = CoffeeMachine.makeMachine(50);
  console.log(maker3);

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee(shots: number) {
      const coffee = this.machine.makeCoffee(shots);
      console.log(coffee);
    }
  }

  class ProBaristar {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee(shots: number) {
      const coffee = this.machine.makeCoffee(shots);
      console.log(coffee);
      this.machine.fillCoffeeBeans(50);
      this.machine.clean();
    }
  }

  const personalMaker: CoffeeMachine = CoffeeMachine.makeMachine(50);

  const amateur = new AmateurUser(personalMaker); // CoffeeMaker를 받아옴
  console.log('--- amateur ---');
  amateur.makeCoffee(2);

  const pro = new ProBaristar(personalMaker); // CommercialCoffeeMaker를 받아옴
  console.log('----- pro -----');
  pro.makeCoffee(2);
}
