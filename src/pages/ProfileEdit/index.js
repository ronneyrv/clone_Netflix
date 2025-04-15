import { useParams, useNavigate } from "react-router-dom";
import "./useredit.css";
import profile from "../../backand/profileBD";
import { useState, useEffect } from "react";
import Keyboard from "../../components/Keyboard";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import FaceIcon from "@mui/icons-material/Face";

export default function Useredit() {
  const [inputValue, setInputValue] = useState("");
  const [btnNameEdit, setBtnNameEdit] = useState(false);
  const [btnAvataEdit, setBtnAvataEdit] = useState(true);
  const { user } = useParams();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [newAvatar, setNewAvatar] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find((u) => u.user === user);

    if (foundUser) {
      setCurrentUser(foundUser);
      setNewAvatar(foundUser.avatar);
      setInputValue(foundUser.user);
    }
  }, [user]);

  const btnConcluido = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const index = storedUsers.findIndex((u) => u.id === currentUser.id);

    if (index !== -1) {
      storedUsers[index] = {
        ...storedUsers[index],
        user: inputValue,
        avatar: newAvatar,
      };
    }
    localStorage.setItem("users", JSON.stringify(storedUsers));
    navigate("/");
  };

  const btnExcluir = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const filteredUsers = storedUsers.filter((u) => u.id !== currentUser.id);
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    navigate("/");
  };

  const avatarChange = (avatar) => {
    setNewAvatar(avatar);
  };

  const nameEdit = () => {
    setBtnNameEdit(true);
    setBtnAvataEdit(false);
    setInputValue(currentUser.user);
  };

  const avatarEdit = () => {
    setBtnAvataEdit(true);
    setBtnNameEdit(false);
    setInputValue(currentUser.user);
  };

  if (!currentUser) return <div>Carregando usuário...</div>;

  return (
    <div className="page">
      <div className="header-profile">
        <h2>Editar perfil</h2>
        <span>Selecione o que deseja mudar.</span>
      </div>
      <div className="settings">
        <button
          onClick={() => nameEdit()}
          style={{
            background: btnNameEdit ? "white" : "none",
            color: btnNameEdit ? "black" : "white",
          }}
        >
          <PersonRemoveIcon /> Nome
        </button>
        <button
          onClick={() => avatarEdit()}
          style={{
            background: btnAvataEdit ? "white" : "none",
            color: btnAvataEdit ? "black" : "white",
          }}
        >
          <FaceIcon /> Icon
        </button>
      </div>
      <div className="body-profile">
        <div>
          <div
            className="avatar-container"
            style={{ display: btnAvataEdit ? "grid" : "none" }}
          >
            {profile.map((item) => (
              <img
                className="avatars"
                src={item.image}
                alt={item.id}
                onClick={() => avatarChange(item.image)}
              />
            ))}
          </div>
          <div style={{ display: btnNameEdit ? "flex" : "none" }}>
            <Keyboard
              onChange={(char) => {
                if (char === "__backspace__") {
                  setInputValue((prev) => prev.slice(0, -1));
                } else {
                  setInputValue((prev) => prev + char);
                }
              }}
            />
          </div>
          <div className="actions">
            <button onClick={() => btnConcluido()}>Concluído</button>
            <button onClick={() => btnExcluir()}>Excluir perfil</button>
          </div>
        </div>
        <div className="user-profile">
          <div className="user-profile-avatar">
            <img
              src={newAvatar}
              alt={currentUser.user}
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
