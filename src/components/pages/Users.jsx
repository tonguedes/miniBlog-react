import React from "react";

import { Default } from "../templates";
import { UserlListWrapper } from "../molecules";
import { AppLoading } from "../organisms";

export default function Users() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="blogs-screen">
        <h1>Blogs</h1>
        <UserlListWrapper users={users} />
      </div>
    </Default>
  );
}
