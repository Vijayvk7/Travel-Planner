import { useState } from "react";
import Body from "./Body";

export default function Form({ AddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: "false", id: Date.now() };
    console.log(newItem);

    AddItems(newItem);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>
          <em>What Would You Need For Your Trip</em>
        </h2>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="sel"
          name=""
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="inp"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          minLength="3"
          maxLength="60"
        ></input>
        <button style={{ width: "70px", height: "40px", borderRadius: "10%" }}>
          Add
        </button>
      </form>
    </div>
  );
}
