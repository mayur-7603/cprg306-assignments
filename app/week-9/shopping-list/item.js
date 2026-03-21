export default function Item({ item, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="text-sm cursor-pointer hover:bg-gray-800 p-2 rounded"
    >
      <div className="font-semibold capitalize">{item.name}</div>
      <div className="text-gray-200">Quantity: {item.quantity}</div>
      <div className="text-gray-200">Category: {item.category}</div>
    </div>
  );
}