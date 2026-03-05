"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./grocery-items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <h1 className="text-xl font-semibold mb-6">Week 7 — Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <div className="w-full max-w-md mt-6">
        <ItemList items={items} />
      </div>
    </main>
  );
}