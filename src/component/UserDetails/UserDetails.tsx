/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";

interface UserDetailsProps {
  user: SearchUserType | null;
}

type SearchUserType = {
  login: string;
  id: number;
};

type UserType = {
  login: string;
  id: number;
  avatar_url: string;
  followers: number;
};

function UserDetails(props: UserDetailsProps) {
  const [userDetails, setUserDetails] = useState<null | UserType>(null);
  useEffect(() => {
    if (!!props.user) {
      axios
        .get<UserType>(`https://api.github.com/users/${props.user.login}`)
        .then((res) => {
          setUserDetails(res.data);
        });
    }
  }, [props.user]);

  return (
    <div>
      {userDetails && (
        <div>
          <h2>{userDetails.login}</h2>
          <img src={userDetails.avatar_url} />
          <br />
          {userDetails.login}, followers: {userDetails.followers}
        </div>
      )}
    </div>
  );
}

export default UserDetails;
