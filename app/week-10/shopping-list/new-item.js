"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      name: name.trim(),
      quantity: Number(quantity),
      category,
    };

    if (!item.name) return;

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  function inc() {
    setQuantity((q) => Math.min(99, q + 1));
  }

  function dec() {
    setQuantity((q) => Math.max(1, q - 1));
  }

  return (
    <section className="w-full max-w-md">
      <div className="bg-white text-black rounded-md p-4 shadow">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Item Name
            </label>
            <input
              className="w-full border rounded px-3 py-2 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. milk"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Quantity (1–99)
            </label>

            <div className="text-xs text-gray-600 mb-1">
              Current:
              <span className="font-semibold text-black"> {quantity}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={dec}
                className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300 font-bold"
              >
                –
              </button>

              <button
                type="button"
                onClick={inc}
                className="w-8 h-8 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Category
            </label>

            <select
              className="w-full border rounded px-3 py-2 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
          >
            Add Item
          </button>
        </form>
      </div>
    </section>
  );
}