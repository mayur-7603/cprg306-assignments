export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="border rounded p-3">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="text-sm opacity-80">{category}</p>
    </li>
  );
}
