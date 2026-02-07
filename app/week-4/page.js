import ItemList from "./item-list";
import ItemListGrouped from "./item-list-grouped";

export default function Page() {
  return (
    <main className="p-8 bg-neutral-950 text-white min-h-screen space-y-12">
      <h1 className="text-3xl font-extrabold">Shopping List</h1>

      {/* REQUIRED output (cards) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">All Items</h2>
        <ItemList />
      </section>

      {/* OPTIONAL output (grouped) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Grouped by Category</h2>
        <ItemListGrouped />
      </section>
    </main>
  );
}
