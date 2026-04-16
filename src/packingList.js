import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  function handleDeleteAll() {
    if (
      window.confirm(
        "Are you sure you want to delete all items from your packing list?",
      )
    ) {
      items.forEach((item) => onDeleteItem(item.id));
    }
  }

  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;

  if (sortedBy === "input") sortedItems = items;

  if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortedBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  if (sortedBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="quantity">Sort by quantity</option>
        </select>
        <button onClick={handleDeleteAll}>Clear List</button>
      </div>
    </div>
  );
}
