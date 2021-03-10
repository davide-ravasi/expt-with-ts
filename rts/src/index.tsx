import ReactDOM from "react-dom";

import SearchUser from "./state/SearchUser";

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <SearchUser />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
