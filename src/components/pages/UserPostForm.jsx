import React from "react";
import { useParams } from "react-router-dom";

import { AppLoading } from "../organisms";
import { Default } from "../templates";

export default function UserPostForm() {
  const { userId } = useParams();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      setTitle("");
      setContent("");
      setIsLoading(false);
    });
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="create-post-screen">
        <h1>Criar</h1>

        <form className="create-post-screen__form">
          <div className="create-post-screen__form-name">
            <label htmlFor="name">Título</label>
            <input
              type="text"
              id="name"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="create-post-screen__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handleForm} className="button-primary">
            Salvar
          </button>
        </form>
      </div>
    </Default>
  );
}
