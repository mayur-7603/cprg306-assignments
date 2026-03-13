"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import itemsData from "./grocery-items.json";

export default function Page() {

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
    <main className="min-h-screen bg-black text-white flex justify-center py-8">

      <div className="w-full max-w-6xl">

        <h1 className="text-xl font-semibold mb-6">
          Shopping List + Meal Ideas
        </h1>

        <div className="grid grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <NewItem onAddItem={handleAddItem} />

            <div className="mt-6">
              <ItemList
                items={items}
                onItemSelect={handleItemSelect}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <MealIdeas ingredient={selectedItemName} />
          </div>

        </div>

      </div>

    </main>
  );
}