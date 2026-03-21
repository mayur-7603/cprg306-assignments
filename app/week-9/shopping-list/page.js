"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./grocery-items.json";

export default function ShoppingListPage() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🛒 Shopping List</h1>

      <div className="bg-gray-900 p-4 rounded">
        <NewItem onAddItem={handleAddItem} />
      </div>

      <div className="bg-gray-900 p-4 rounded">
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="bg-gray-900 p-4 rounded">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}