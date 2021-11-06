{
  // Intersection Types:  &
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    // Student, Worker의 모든 것들을 넣어줘야함!
    console.log(person.name);
    console.log(person.employeeId);
  }
}
