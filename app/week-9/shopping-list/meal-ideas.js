"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMeals() {
    if (!ingredient) return;

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-lg font-bold mt-4">Meal Ideas</h2>

      {meals.length === 0 ? (
        <p>No meals found</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
}