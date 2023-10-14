/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

type Person = [string, number];

let person: Person;
person = ["Max", 21];

let person1: Person = ["Max", 21];

export {};
