{
  // Enum?
  // not in JS
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  // const MONDAY = 0;
  // const TUESDAY = 1;
  const DAYS_ENUM = Object.freeze({ Monday: 0, Tuesday: 1 });
  const today = DAYS_ENUM.Monday;

  // 관련된 상수들을 한꺼번에 관리 <- 쓰지 마세요...
  enum Days_Enum {
    Monday,
    Tuesday,
    Wednesday,
    string = 'manual',
  }

  console.log(Days_Enum.Monday); // 0
  console.log(Days_Enum.Wednesday); // 2
  console.log(Days_Enum.string);
}

{
  type Days = 'Monday' | 'Tuesday';
  // union을 사용합시다.
}
