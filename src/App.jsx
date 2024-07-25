import Logo from "./Logo";
import { useState } from "react";
import Form from "./Form";
import Body from "./Body";
import Stats from "./Stats";

export default function App() {
  const [Items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function ToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm(
      "Are You Sure You Want To Clear All Items On the List ?"
    );

    if (confirm) setItems([]);
  }

  return (
    <>
      <Logo />
      <Form AddItems={handleAddItems} />
      <Body
        items={Items}
        onDelete={handleDeleteItems}
        onToggleItems={ToggleItems}
        handleClearList={handleClearList}
      />
      <Stats items={Items} />
    </>
  );
}
