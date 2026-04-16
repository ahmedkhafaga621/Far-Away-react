export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You have not added any items to your packing list yet!🚀</em>
      </footer>
    );

  const packedItems = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        You have packed {packedItems} items for your trip! ✈️ , and you already
        have {items.length} ({Math.round((packedItems / items.length) * 100)}%)
        items in your list!
      </em>
    </footer>
  );
}
