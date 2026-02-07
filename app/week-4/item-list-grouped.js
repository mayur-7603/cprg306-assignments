import items from "./items.json";

export default function ItemListGrouped() {
  const grouped = items.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort();

  const titleCase = (str) =>
    str
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <section key={category} className="space-y-3">
          <h2 className="text-2xl font-bold">{titleCase(category)}</h2>

          <ul className="space-y-2">
            {grouped[category].map((item) => (
              <li key={item.id} className="ml-6 list-disc text-lg">
                {item.name}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <p className="opacity-70">...etc</p>
    </div>
  );
}
