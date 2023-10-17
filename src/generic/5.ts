/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

function testPair<T, U>(pair: KeyValuePair<T, U>): void {
  console.log(`key:${pair.key},and value:${pair.value}`);
}

testPair<number, number>({ key: 1, value: 100 });

export {};
