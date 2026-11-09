# Access Modifiers in TypeScript OOP

Access modifiers are important features of Object-Oriented Programming (OOP) in TypeScript. They control how class properties and methods can be accessed or modified. TypeScript provides four commonly used modifiers: public, private, protected, and readonly. Understanding them helps developers write secure, organized, and maintainable code.

# Example

1. Public
The public modifier allows properties and methods to be accessed from anywhere, including inside the class, subclasses, and external code. It is the default access modifier.

class User {
  constructor(public name: string) {}
}
const user = new User("Yamin");
console.log(user.name); // Yamin


2. Private
The private modifier restricts access to a property or method within its own class. It cannot be accessed directly outside the class or from subclasses.

class BankAccount {
  constructor(private balance: number) {}
  get getBalance(): number {
    return this.balance;
  }
}
const account = new BankAccount(10000);
console.log(account.getBalance); // 10000
// account.balance; // Error


3. Protected
The protected modifier allows access within the declaring class and its subclasses, but not from external code.

class Animal {
  constructor(protected sound: string) {}
  get animalSound(): string {
    return this.sound;
  }
}
class Dog extends Animal {
  newSound(): string {
    return this.sound;
  }
}
const dog = new Dog("Animal make a sound");
console.log(dog.newSound());
// dog.sound(); // Error


4. Readonly
The readonly modifier allows a property to be assigned only during initialization or inside the constructor. It cannot be reassigned afterward.

class Product {
  constructor(readonly id: number) {}
}
const product = new Product(101);
console.log(product.id); // 101
// product.id = 102; // Error