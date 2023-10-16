/*
  Використовуйте generics та інтерфейси, щоб виправити помилку 
  в наступних класах:
*/
interface TypeInfo {
  title: string;
  pageInfo(): void;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<TypeInfo> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
