"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Added: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full bg-zinc-900 p-6 rounded-lg shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-white">New Item</h2>

      {/* Name */}
      <div className="space-y-1">
        <label className="text-sm text-zinc-200" htmlFor="name">
          Item name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Bread"
          className="w-full p-2 rounded-md bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Quantity + Category Row */}
      <div className="flex gap-3">
        {/* Quantity */}
        <div className="flex-1 space-y-1">
          <label className="text-sm text-zinc-200" htmlFor="quantity">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 rounded-md bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="flex-1 space-y-1">
          <label className="text-sm text-zinc-200" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="h-[42px] px-4 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-500 active:scale-[0.98]"
          >
            +
          </button>
        </div>
      </div>
    </form>
  );
}
