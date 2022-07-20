import React from "react";
import { useParams } from "react-router-dom";

import { Avatar } from "../atoms";
import { Default } from "../templates";
import { AppLoading } from "../organisms";

export default function UserPost() {
  const { userId, postId } = useParams();

  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts/${postId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      });
  }, [postId, userId]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="user-post-screen">
        <div className="user-post-screen__post-photo">
          <img src={post.image} className="responsive" alt="" />
        </div>
        <h2 className="user-post-screen__post-title">{post.title}</h2>
        <div className="user-post-screen__post-date">
          Publicado em {post.createdAt} por{" "}
          <Avatar src={post.userData.avatar} />
          <strong> {`${post.userData.fn} ${post.userData.ln}`}</strong>
        </div>
        <div className="user-post-screen__post-content">{post.content}</div>
      </div>
    </Default>
  );
}
