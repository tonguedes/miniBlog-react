import React from "react";
import { useParams } from "react-router-dom";

import { Default } from "../templates";
import { UserBio, PostListWrapper } from "../molecules";
import { AppLoading } from "../organisms";

export default function UserBlog() {
  const { userId } = useParams();

  const [posts, setPosts] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data[0].userData);
        setPosts(data);
        setIsLoading(false);
      });
  }, [userId]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="user-blog-screen">
        <UserBio
          avatar={user.avatar}
          bio={user.bio}
          name={`${user.fn} ${user.ln}`}
        />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
