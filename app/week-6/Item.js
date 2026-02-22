export default function Item({ name, quantity, category }) {
  return (
    <li style={{ border: "1px solid #ddd", padding: 10, marginBottom: 8 }}>
      <strong>{name}</strong>
      <div>
        Buy {quantity} in <em>{category}</em>
      </div>
    </li>
  );
}