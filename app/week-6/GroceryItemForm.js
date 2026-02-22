"use client";
import { useState } from "react";

export default function GroceryItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <label style={{ display: "block", marginBottom: 6 }}>Item name</label>
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g., Apples"
        style={{
          padding: 10,
          width: "100%",
          borderRadius: 6,
          border: "1px solid #666",
          background: "transparent",
          color: "inherit",
        }}
      />

      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <div style={{ width: 140 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Qty</label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{
              padding: 10,
              width: "100%",
              borderRadius: 6,
              border: "1px solid #666",
              background: "transparent",
              color: "inherit",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: 10,
              width: "100%",
              borderRadius: 6,
              border: "1px solid #666",
              background: "transparent",
              color: "inherit",
            }}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen</option>
            <option value="canned">Canned</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        style={{
          marginTop: 14,
          padding: "10px 14px",
          borderRadius: 6,
          border: "1px solid #666",
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
    </form>
  );
}