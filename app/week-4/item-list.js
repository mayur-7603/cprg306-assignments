import items from "./items.json";
import Item from "./item";

export default function ItemList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}
