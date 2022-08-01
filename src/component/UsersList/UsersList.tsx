import axios from "axios";
import React, { useEffect, useState } from "react";

type SearchUserType = {
  login: string;
  id: number;
};

interface UserListProps {
  term: string;
  selectedUser: SearchUserType | null;
  onUserSelect: (user: SearchUserType) => void;
}

type SearchResult = {
  items: SearchUserType;
};

function UsersList(props: UserListProps) {
  const [users, setUsers] = useState<SearchUserType[]>([]);

  useEffect(() => {
    axios
      .get<SearchResult>(`https://api.github.com/search/users?q=${props.term}`)
      .then((res) => {
        setUsers([res.data.items]);
      });
  }, [props.term]);

  return (
    <ul>
      {users.map((u) => (
        <li
          key={u.id}
          className={props.selectedUser === u ? "selected" : ""}
          onClick={() => {
            props.onUserSelect(u);
          }}
        >
          {u.login}
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
