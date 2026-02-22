"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name"); // name | category | group

  const buttonStyle = (active) => ({
    padding: "8px 12px",
    marginRight: 8,
    border: "1px solid #333",
    background: active ? "#333" : "#eee",
    color: active ? "#fff" : "#000",
    cursor: "pointer",
  });

  if (sortBy === "group") {
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    const sortedCategories = Object.keys(grouped).sort();

    return (
      <section>
        <div style={{ marginBottom: 12 }}>
          <button onClick={() => setSortBy("name")} style={buttonStyle(sortBy === "name")}>
            Sort by Name
          </button>
          <button onClick={() => setSortBy("category")} style={buttonStyle(sortBy === "category")}>
            Sort by Category
          </button>
          <button onClick={() => setSortBy("group")} style={buttonStyle(sortBy === "group")}>
            Group by Category
          </button>
        </div>

        {sortedCategories.map((category) => {
          const sortedItems = grouped[category].sort((a, b) =>
            a.name.localeCompare(b.name)
          );

          return (
            <div key={category} style={{ marginBottom: 20 }}>
              <h2 style={{ textTransform: "capitalize" }}>
                {category}
              </h2>
              <ul style={{ listStyle: "none", paddingLeft: 20 }}>
                {sortedItems.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    );
  }

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.category.localeCompare(b.category);
  });

  return (
    <section>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setSortBy("name")} style={buttonStyle(sortBy === "name")}>
          Sort by Name
        </button>
        <button onClick={() => setSortBy("category")} style={buttonStyle(sortBy === "category")}>
          Sort by Category
        </button>
        <button onClick={() => setSortBy("group")} style={buttonStyle(sortBy === "group")}>
          Group by Category
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}