import React from "react";

import { Avatar } from "../atoms";

export default function UserBio(props) {
  return (
    <div className="user-blog-screen__header">
      <div className="user-blog-screen__header-photo">
        <Avatar src={props.avatar} />
      </div>
      <h1 className="user-blog-screen__header-title">{props.name}</h1>
      <p className="user-blog-screen__header-bio">{props.bio}</p>
    </div>
  );
}
