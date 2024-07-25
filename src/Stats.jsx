export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <div className="stats">
        <h2>
          <em>Start Adding Items on Your List 😎 </em>
        </h2>
      </div>
    );
  }
  const numitems = items.length;
  const packeditems = items.filter((item) => !item.packed).length;
  const percent = Math.round((packeditems / numitems) * 100);
  return (
    <div className="stats">
      <h2>
        <em>
          You Have {numitems} of items to pack. You have packed {packeditems} (
          {percent}%)
        </em>
      </h2>
    </div>
  );
}
