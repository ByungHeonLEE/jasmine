/* 1. Variable Declare */
console.log("\n\n1. Variable Declare\n");

//js
let jsName = "Jasmine";
let jsAge = 25;
let jsObj = {
  name: "Jasmine",
  age: 25,
};

//ts
let tsName: string = "Jasmine";
let tsAge: number = 25;
let tsObj: object = {
  name: tsName,
  age: tsAge,
};
/* end: 1 */
//

/* 2. Variable Interface */
console.log("\n\n2. Variable Interface\n");

interface Human {
  name: string;
  age: number;
}

let obj2: Human = {
  name: "jasmine",
  age: 25,
};

/* end: 2 */
//

/* 3. Function */
console.log("\n\n3. Function\n");

//js
function jsAdd(x: any, y: any) {
  return x + y;
}

//ts
function tsAdd(x: number, y: number): number {
  return x + y;
}

//js
const jsAdd2 = (x: any, y: any) => {
  return x + y;
};

//ts

const tsAdd2: (base: number, increase: number) => number = (x, y) => {
  return x + y;
};
//타입 추론이 일어나서 parameter의 한쪽만 변수를 선언해도 가능

/* end: 3 */
//

/* 4. Function Parameter */
console.log("\n\n4. Function Parameter\n");

//Default Example
const hello = (name: string, message: string): void => {
  console.log(`Hi! ${name}, ${message}`);
};
hello("Jasmine", "Let's Coding");

//Optional Parameter
const hello2 = (name: string, message?: string): void => {
  if (message) {
    console.log(`Hi! ${name}, ${message}`);
  } else {
    console.log(`Hi! ${name}, Welcome`);
  }
};
hello2("Jasmine");
hello2("Jasmine", "HIHIHIHIHI");

//Default-initialized Parameter
const hello3 = (name: string, message: string = "Welcome!"): void => {
  console.log(`Hi! ${name}, ${message}`);
};

hello2("Jasmine");
hello2("Jasmine", "HIHIHIHIHI");
//Rest Parameter
const hello4 = (name: string, ...message: string[]): void => {
  console.log(message);
  console.log(`Hi! ${name}, ${message.join(" ")}`);
};

hello4("Jasmine");
hello4("Jasmine", "HIHIHIHIHI", "you");
/* end: 4 */
//

/* 5. Class Default */
console.log("\n\n5. Class Default\n");

//Class Declare
class Person {
  name: string; //속성

  //생성자
  constructor(name: string) {
    this.name = name;
  }
  //메소드
  hello(): string {
    return `hello ${this.name}`;
  }
}

const person: Person = new Person("Jasmine");
console.log(person.name);
console.log(person.hello());
//Class Extends
//person 이 갖고있는 속성을 Prograamer가 그대로 쓸 수 있음
class Programmer extends Person {
  github: string;
  constructor(name: string, github: string) {
    super(name); //this.name = name;
    this.github = github;
  }
  //   hello(): string {
  //     return `hello ${this.name}. I'm programmer`;
  //   }
}

const programmer: Programmer = new Programmer("Jasmine", "github");
console.log(programmer.name);
console.log(programmer.hello());
//programmer에 hello 있으면 그거 실행, 없으면 부모인 person 실행.

/* end: 5 */
//

/* 6. Access Modifier */
console.log("\n\n6. Access Modifier\n");

class Person2 {
  //   public name: string; //모든 접근이 허용
  //   private age: number; //class 내부에서만 허용
  //   protected gender: string; //클래스 내부, 자식 클래스 내부에서만 허용

  constructor(
    public name: string,
    private age: number,
    protected gender: string
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public introduce(): string {
    return `Hello, I'm a ${this.name}, ${this.age}, ${this.gender}`;
  }
}

const person2 = new Person2("bumsu", 25, "man");
console.log(person2.name);

/* end: 6 */
//

/* 7. readonly, static */
// console.log("\n\n7. readonly, static\n");

//readonly
class Person3 {
  public readonly created: Date;

  constructor(public name: string) {
    this.name = name;
    this.created = new Date();
  }
}

const person3 = new Person3("Jasmine");

//static
class Bungeoppang {
  //static 속성

  constructor(private taste: string) {
    this.taste = taste;
  }

  //static 메소드
}

const bungeoppang1: Bungeoppang = new Bungeoppang("red bean");
const bungeoppang2: Bungeoppang = new Bungeoppang("cream");
const bungeoppang3: Bungeoppang = new Bungeoppang("sweet potato");

/* end: 7 */
//

/* 8. Abstract Class */
// console.log("\n\n8. Abstract Class\n");

abstract class Singer {
  constructor(public name: string) {
    this.name = name;
  }

  // Abstract Method
  abstract sing(): void;
}

/* end: 8 */
//

/* 9. Interface */
// console.log("\n\np. Interface\n");

//Function Interface
interface Operation {
  (x: number, y: number): number;
}

//Class Interface
interface Animal {
  species: string;
  age: number;
}

/* end: 9 */
