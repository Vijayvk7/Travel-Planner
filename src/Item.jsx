import React from "react";

function Item({ item, onDelete, onToggleItems }) {
  return (
    <li className="List">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      ></input>
      <span style={!item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} &nbsp;
        {item.quantity}&nbsp;
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

export default Item;
