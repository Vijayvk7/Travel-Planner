import Item from "./Item";
import { useState } from "react";
export default function Body({
  items,
  onDelete,
  onToggleItems,
  handleClearList,
}) {
  const [sortby, setSortBy] = useState("input");

  let sorteditems;

  if (sortby === "input") {
    sorteditems = items;
  }
  if (sortby === "description") {
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortby === "status") {
    sorteditems = items
      .slice()
      .sort((a, b) => (a.packed === b.packed ? 0 : a.packed ? -1 : 1));
  }

  return (
    <>
      <div className="packingList">
        <div>
          <ul>
            {sorteditems.map((item) => (
              <Item
                key={item.id}
                onDelete={onDelete}
                onToggleItems={onToggleItems}
                item={item}
              />
            ))}
          </ul>
        </div>
        <div className="selectContainer">
          <select
            value={sortby}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort"
          >
            <option value="input">Sort By Input</option>
            <option value="description">Sort By Description</option>
            <option value="status">Sort By Packed Status</option>
          </select>
          <button className="clear" onClick={handleClearList}>
            Clear List
          </button>
        </div>
      </div>
    </>
  );
}
