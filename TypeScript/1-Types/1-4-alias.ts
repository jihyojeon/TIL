{
  // ✨ make TS like TS
  // Type Aliases: I can make new types!?

  type Text = string;
  const name: Text = 'Jihyo'; // Text <- string

  type Num = number;
  const myNum: Num = 2;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = { name: 'Jihyo', age: 26 };

  // String Literal types
  type Name = 'name';
  const jihyoName: Name = 'name'; // <- can use only 'name'

  type JSON = 'json';
  const json: JSON = 'json';

  type Bool = true; // ?? WHYY
}
