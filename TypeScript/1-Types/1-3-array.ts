{
  // Array
  const fruits: string[] = ['🍏', '🍌', '🍉', '🍓']; // better for consistency
  const nums: Array<number> = [1, 2, 3]; // generics?
  function printArray(fruits: readonly string[]) {} // do not modify in the function

  // tuple <- pls no,,,
  // pls use interface, type alias, class
  let student: [string, number];
  student = ['name', 123];
  // react useState returns tuple!!
}
