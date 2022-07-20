import React from "react";

import { UserListItem } from ".";

export default function UserlListWrapper(props) {
  return (
    <div className="blogs-screen__list">
      {props.users
        .sort((a, b) => a.fn.localeCompare(b.fn))
        .map((user) => (
          <UserListItem
            key={user.id}
            id={user.id}
            src={user.avatar}
            name={`${user.fn} ${user.ln}`}
          />
        ))}
    </div>
  );
}
