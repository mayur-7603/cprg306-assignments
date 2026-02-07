import groceryItems from "./groceryItems.json";
import GroceryItemList from "./GroceryItemList";

export default function Week4Page() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-extrabold">Week 4: Handling Lists</h1>

      <GroceryItemList
        items={groceryItems}
        title={`Grocery List (${groceryItems.length} items)`}
      />
    </main>
  );
}
