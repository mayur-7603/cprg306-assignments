import GroceryItem from "./GroceryItem";

export default function GroceryItemList({ items, title }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <GroceryItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
