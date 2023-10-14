let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}

let some1: unknown;
some1 = "Text";
let str1: string;
str1 = some as string;

export {};
