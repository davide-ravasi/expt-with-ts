import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guestList, setGuestList] = useState<string[]>([]);

  const addToList = () => {
    setGuestList([...guestList, name]);
  };

  return (
    <div>
      <h1>Guest List</h1>
      {guestList ? (
        <ul>
          {guestList.map((el) => (
            <li key={name}>{el}</li>
          ))}
        </ul>
      ) : (
        "No elements in the list"
      )}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => addToList()}>add guest</button>
    </div>
  );
};

export default GuestList;
