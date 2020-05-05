"use strict";
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
let tsName = "Jasmine";
let tsAge = 25;
let tsObj = {
    name: tsName,
    age: tsAge,
};
/* end: 1 */
//
/* 2. Variable Interface */
console.log("\n\n2. Variable Interface\n");
let obj2 = {
    name: "jasmine",
    age: 25,
};
/* end: 2 */
//
/* 3. Function */
console.log("\n\n3. Function\n");
//js
function jsAdd(x, y) {
    return x + y;
}
//ts
function tsAdd(x, y) {
    return x + y;
}
//js
const jsAdd2 = (x, y) => {
    return x + y;
};
//ts
const tsAdd2 = (x, y) => {
    return x + y;
};
//타입 추론이 일어나서 parameter의 한쪽만 변수를 선언해도 가능
/* end: 3 */
//
/* 4. Function Parameter */
console.log("\n\n4. Function Parameter\n");
//Default Example
const hello = (name, message) => {
    console.log(`Hi! ${name}, ${message}`);
};
hello("Jasmine", "Let's Coding");
//Optional Parameter
const hello2 = (name, message) => {
    if (message) {
        console.log(`Hi! ${name}, ${message}`);
    }
    else {
        console.log(`Hi! ${name}, Welcome`);
    }
};
hello2("Jasmine");
hello2("Jasmine", "HIHIHIHIHI");
//Default-initialized Parameter
const hello3 = (name, message = "Welcome!") => {
    console.log(`Hi! ${name}, ${message}`);
};
hello2("Jasmine");
hello2("Jasmine", "HIHIHIHIHI");
//Rest Parameter
const hello4 = (name, ...message) => {
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
    //생성자
    constructor(name) {
        this.name = name;
    }
    //메소드
    hello() {
        return `hello ${this.name}`;
    }
}
const person = new Person("Jasmine");
console.log(person.name);
console.log(person.hello());
//Class Extends
//person 이 갖고있는 속성을 Prograamer가 그대로 쓸 수 있음
class Programmer extends Person {
    constructor(name, github) {
        super(name); //this.name = name;
        this.github = github;
    }
}
const programmer = new Programmer("Jasmine", "github");
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
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduce() {
        return `Hello, I'm a ${this.name}, ${this.age}, ${this.gender}`;
    }
    get getAge() {
        return `${this.age}살`;
    }
    set setAge(age) {
        if (age > 0)
            this.age = age;
        else
            console.log("NO");
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
    constructor(name) {
        this.name = name;
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
    constructor(taste) {
        this.taste = taste;
        this.taste = taste;
        Bungeoppang.count++;
    }
    //static 메소드
    static getCount() {
        return Bungeoppang.count;
    }
}
//static 속성
Bungeoppang.count = 0;
console.log(Bungeoppang.getCount());
const bungeoppang1 = new Bungeoppang("red bean");
console.log(Bungeoppang.getCount());
const bungeoppang2 = new Bungeoppang("cream");
console.log(Bungeoppang.getCount());
const bungeoppang3 = new Bungeoppang("sweet potato");
console.log(Bungeoppang.getCount());
/* end: 7 */
//
/* 8. Abstract Class */
console.log("\n\n8. Abstract Class\n");
class Singer {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class Ballader extends Singer {
    sing() {
        console.log("Na ~~ Nana~");
    }
}
const ballader = new Ballader("park hyo shin");
ballader.sing();
class TrotSinger extends Singer {
    sing() {
        console.log("La ~~ lala~");
    }
}
const trotSinger = new TrotSinger("Tae jhin ah");
trotSinger.sing();
const singers = [ballader, trotSinger];
singers.forEach((singer) => {
    singer.sing();
});
/* end: 8 */
//
/* 9. Interface */
console.log("\n\n9. Interface\n");
const sum = (base, increase) => {
    return base + increase;
};
const sum2 = (base, increase) => {
    return base + increase;
};
//class 를 상속받을 때는 extends, interface를 상속받을 때는 ㅑmplements
class HouseDog extends Singer {
    constructor(species, age, name, master) {
        super(name);
        this.species = species;
        this.age = age;
        this.name = name;
        this.master = master;
        this.species = species;
        this.age = age;
        this.master = master;
    }
    sing() {
        console.log("wall wall");
    }
    hello() {
        console.log(`hello i'm ${this.species}`);
    }
}
const housedog = new HouseDog("Dog", 25, "kong", "Honey");
housedog.hello();
housedog.sing();
//추상 클래스를 받아오면 추상 메소드를 반드시 갖고와라
/* end: 9 */
