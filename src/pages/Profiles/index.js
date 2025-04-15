import "./profiles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Keyboard from "../../components/Keyboard";

export default function Profiles() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const btnCancel = () => {
    navigate("/");
  };

  const btnNext = (user) => {
    const newUser = {
      id: uuidv4(),
      user: user,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    };

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate(`/perfil/${user}`);
  };

  return (
    <div className="page">
      <div className="header-profile">
        <h2>Nome do perfil</h2>
        <span>Cada pessoa que mora com você pode ter o próprio perfil.</span>
      </div>
      <div className="body-profile">
        <div>
          <Keyboard
            onChange={(char) => {
              if (char === "__backspace__") {
                setInputValue((prev) => prev.slice(0, -1));
              } else {
                setInputValue((prev) => prev + char);
              }
            }}
          />
          <div className="actions">
            <button onClick={() => btnCancel()}>Cancelar</button>
            <button onClick={() => btnNext(inputValue)}>Próximo</button>
          </div>
        </div>
        <div className="user-profile">
          <div className="user-profile-avatar">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="img-padrao"
            />
          </div>
          <div>
            <input
              placeholder="Dê um nome ao seu perfil"
              className="name-profile"
              value={inputValue}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
