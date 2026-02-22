"use client";
import { useState } from "react";
import itemsData from "./items.json";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main style={{ padding: 20, maxWidth: 700 }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>Shopping List</h1>

      <GroceryItemForm onAddItem={handleAddItem} />

      <ItemList items={items} />
    </main>
  );
}