import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Users";
import Useredit from "./pages/ProfileEdit";
import Profiles from "./pages/Profiles";

export default function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> }></Route>
                <Route path="/home/:user" element={ <Home /> }></Route>
                <Route path="/perfil" element={ <Profiles /> }></Route>
                <Route path="/perfil/:user" element={ <Useredit /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}