import { useState } from "react";

const userList = [
  { name: "sarah", age: 20 },
  { name: "pinco", age: 30 },
  { name: "andrea", age: 40 },
  { name: "davide", age: 50 },
];

const SearchUser: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const searchName = () => {
    const userFound = userList.find((el) => el.name === name);

    setUser(userFound);
  };

  return (
    <div>
      <h3>search user</h3>
      {user ? (
        <div>
          {user.name} -- {user.age}{" "}
        </div>
      ) : (
        "no results"
      )}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={searchName}>Search</button>
    </div>
  );
};

export default SearchUser;
