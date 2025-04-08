import AppRouters from "./routes.js";
import users from "./backand/usersDB";

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

export default function App() {
  return <AppRouters />;
}
