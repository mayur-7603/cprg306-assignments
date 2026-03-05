export default function Item({ item }) {
  return (
    <div className="text-sm">
      <div className="font-semibold capitalize">{item.name}</div>
      <div className="text-gray-200">Quantity: {item.quantity}</div>
      <div className="text-gray-200">Category: {item.category}</div>
    </div>
  );
}