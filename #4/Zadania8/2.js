class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Teacher extends Person {
  teach(subject) {
    console.log(`< ${this.name} ${this.surname}> is now teaching ${subject}.`);
  }
}

const teacher = new Teacher("Andrzej", "Kowalski");
teacher.teach("Math");
