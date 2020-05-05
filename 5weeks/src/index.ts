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
  get getAge(): string {
    return `${this.age}살`;
  }

  set setAge(age: number) {
    if (age > 0) this.age = age;
    else console.log("NO");
  }
}

const person2 = new Person2("bumsu", 25, "man");
console.log(person2.name);
console.log(person2.getAge);

person2.setAge = 27;
console.log(person2.getAge);

person2.setAge = -1;
console.log(person2.getAge);

/* end: 6 */
//

/* 7. readonly, static */
console.log("\n\n7. readonly, static\n");

//readonly
class Person3 {
  public readonly created: Date; //읽기전용

  constructor(public name: string) {
    this.name = name;
    this.created = new Date();
  }
}

const person3 = new Person3("Jasmine");
console.log(person3.name);
console.log(person3.created);
// person3.created = new Date(); 읽기전용이나까 public이라도 바꿀 수 가 없음

//static
class Bungeoppang {
  //static 속성
  private static count: number = 0;

  constructor(private taste: string) {
    this.taste = taste;
    Bungeoppang.count++;
  }

  //static 메소드
  static getCount() {
    return Bungeoppang.count;
  }
}
console.log(Bungeoppang.getCount());

const bungeoppang1: Bungeoppang = new Bungeoppang("red bean");
console.log(Bungeoppang.getCount());

const bungeoppang2: Bungeoppang = new Bungeoppang("cream");
console.log(Bungeoppang.getCount());

const bungeoppang3: Bungeoppang = new Bungeoppang("sweet potato");
console.log(Bungeoppang.getCount());

/* end: 7 */
//

/* 8. Abstract Class */
console.log("\n\n8. Abstract Class\n");

abstract class Singer {
  constructor(public name: string) {
    this.name = name;
  }
  //추상 클래스는 객체를 만들 수 없음, 메소드가 구현이 덜 되었기 때문.
  // Abstract Method
  abstract sing(): void;
}

class Ballader extends Singer {
  sing(): void {
    console.log("Na ~~ Nana~");
  }
}

const ballader: Ballader = new Ballader("park hyo shin");
ballader.sing();

class TrotSinger extends Singer {
  sing(): void {
    console.log("La ~~ lala~");
  }
}

const trotSinger: TrotSinger = new TrotSinger("Tae jhin ah");
trotSinger.sing();

const singers = [ballader, trotSinger];
singers.forEach((singer) => {
  singer.sing();
});

/* end: 8 */
//

/* 9. Interface */
console.log("\n\n9. Interface\n");

//Function Interface
interface Operation {
  (x: number, y: number): number;
}

const sum: Operation = (base: number, increase: number): number => {
  return base + increase;
};

const sum2: Operation = (base, increase) => {
  return base + increase;
};

//Class Interface
interface Animal {
  species: string;
  age: number;
  hello: () => void;
}
interface Pet {
  name: string;
  master?: string;
}

//class 를 상속받을 때는 extends, interface를 상속받을 때는 ㅑmplements
class HouseDog extends Singer implements Animal, Pet {
  constructor(
    public species: string,
    public age: number,
    public name: string,
    public master: string
  ) {
    super(name);
    this.species = species;
    this.age = age;
    this.master = master;
  }
  sing(): void {
    console.log("wall wall");
  }
  hello(): void {
    console.log(`hello i'm ${this.species}`);
  }
}

const housedog: HouseDog = new HouseDog("Dog", 25, "kong", "Honey");
housedog.hello();
housedog.sing();

//추상 클래스를 받아오면 추상 메소드를 반드시 갖고와라
/* end: 9 */
