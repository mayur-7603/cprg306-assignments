"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.category.localeCompare(b.category);
  });

  return (
    <section>
      <div className="flex items-center gap-2 text-sm mb-3">
        <span className="text-gray-300">Sort by:</span>

        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`px-2 py-1 rounded border text-xs ${
            sortBy === "name"
              ? "bg-blue-600 border-blue-600"
              : "border-gray-500"
          }`}
        >
          Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`px-2 py-1 rounded border text-xs ${
            sortBy === "category"
              ? "bg-blue-600 border-blue-600"
              : "border-gray-500"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <li key={item.id} className="border border-gray-500 rounded p-3">
            <Item item={item} onSelect={() => onItemSelect(item)} />
          </li>
        ))}
      </ul>
    </section>
  );
}