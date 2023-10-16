/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T> {
  key: T;
  value: T;
}

function testPair<T>(pair: KeyValuePair<T>): void {
  console.log(`key:${pair.key},and value:${pair.value}`);
}

testPair<number>({ key: 1, value: 100 });

export {};
