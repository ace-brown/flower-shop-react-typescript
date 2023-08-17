import { ReactNode } from "react";

interface Listprops<T> {
  items: T[];
  render: (itam: T) => ReactNode;
}

const List = <T,>({ items, render }: Listprops<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
