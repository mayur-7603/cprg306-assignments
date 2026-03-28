"use client";

import { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    if (!user) return;

    try {
      const itemsFromDb = await getItems(user.uid);
      setItems(itemsFromDb);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  async function handleAddItem(item) {
    if (!user) return;

    try {
      const id = await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, { id, ...item }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");

    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">🛒 Shopping List</h1>
        <p className="text-gray-300">
          Please login first to view your shopping list.
        </p>
      </main>
    );
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