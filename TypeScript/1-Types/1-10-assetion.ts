{
  // type assertions <- 별로,,, 최대한 피하자.
  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  const l = (result as string).length;
  console.log(l);
}
