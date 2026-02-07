export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-white/15 rounded-lg p-4 bg-white/5">
      <p className="font-semibold">{name}</p>
      <p className="text-sm opacity-80">Quantity: {quantity}</p>
      <p className="text-sm opacity-70 capitalize">{category}</p>
    </li>
  );
}
