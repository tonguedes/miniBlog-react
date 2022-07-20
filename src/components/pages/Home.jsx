import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg";

import { AppLoading } from "../organisms";

export default function Home() {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const onChange = (event) => setCurrentUser(event.target.value);
  const onConfirm = () => navigate(`/users/${currentUser}`);

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
    <div className="home-screen">
      <div className="home-screen__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select className="home-screen__select-users" onChange={onChange}>
        <option value="">Selecionar usuário</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option
              key={user.id}
              value={user.id}
            >{`${user.fn} ${user.ln}`}</option>
          ))}
      </select>
      {currentUser && (
        <button onClick={onConfirm} className="button-primary">
          Entrar
        </button>
      )}
    </div>
  );
}
