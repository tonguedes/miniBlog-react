import React from "react";

import { PostListItem } from ".";

export default function PostListWrapper(props) {
  return (
    <div className="user-blog-screen__posts">
      {props.posts.map((post) => (
        <PostListItem
          key={post.id}
          postId={post.id}
          image={post.image}
          title={post.title}
          createdAt={post.createdAt}
          userId={post.userData.id}
        />
      ))}
    </div>
  );
}
