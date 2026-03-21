"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      if (!ingredient) return;

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      setMeals(data.meals || []);
    }

    fetchMeals();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      {meals.length === 0 ? (
        <p>No meals found</p>
      ) : (
        meals.map((meal) => (
          <p key={meal.idMeal}>{meal.strMeal}</p>
        ))
      )}
    </div>
  );
}