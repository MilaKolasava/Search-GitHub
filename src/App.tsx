import React, { useState } from "react";
import UsersList from "./component/UsersList/UsersList";
import Search from "./component/Search/Search";
import "./App.css";
import UserDetails from "./component/UserDetails/UserDetails";

type SearchUserType = {
  login: string;
  id: number;
};

function App() {
  const [searchTerm, setSearchTerm] = useState("it-kamasutra");
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);

  return (
    <div className="container">
      <div>
        <Search
          value={searchTerm}
          onSubmit={(value: string) => {
            setSearchTerm(value);
          }}
        />
        <button onClick={() => setSearchTerm("it-kamasutra")}>reset</button>
        <UsersList
          term={searchTerm}
          selectedUser={selectedUser}
          onUserSelect={(user) => {
            setSelectedUser(user);
          }}
        />
      </div>
      <UserDetails user={selectedUser} />
    </div>
  );
}

export default App;
