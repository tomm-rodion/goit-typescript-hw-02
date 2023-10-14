/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;

function compare<T extends TopType, K extends BottomType>(
  top: T,
  bottom: K
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function compare2<T extends Partial<AllType>, K extends Partial<AllType>>(
  top: T,
  bottom: K
): AllType {
  return {
    name: top.name || "",
    color: top.color || "",
    position: bottom.position || 0,
    weight: bottom.weight || 0,
  };
}

export {};
