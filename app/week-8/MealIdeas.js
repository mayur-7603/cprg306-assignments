"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (!ingredient) {
        setMeals([]);
        return;
      }

      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Meal Ideas</h2>

      {!ingredient ? (
        <p className="text-sm text-gray-400">
          Select an item to see meal ideas.
        </p>
      ) : (
        <>
          <p className="text-sm mb-3">
            Here are some meal ideas using <span className="font-bold">{ingredient}</span>:
          </p>

          {meals.length === 0 ? (
            <p className="text-sm text-gray-400">No meal ideas found.</p>
          ) : (
            <ul className="space-y-2">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="border border-gray-500 rounded p-2 text-sm"
                >
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}