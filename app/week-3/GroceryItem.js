export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-white p-3">
      <p className="font-bold">
        {name}
      </p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">
        Category: {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
    </li>
  );
}