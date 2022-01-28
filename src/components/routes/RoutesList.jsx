import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import Profile from "../pages/Profile";
const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/chats/:userId" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default RoutesList;
