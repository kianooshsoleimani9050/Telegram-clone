import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/layout/Sidebar";
const Home = () => {
  const showChats = useSelector((state) => state.showChats);
  return (
    <div className="p-0 d-block d-md-flex home_div__container">
      <div className="p-0 m-0 home_navbar_div__container">
        <Sidebar />
      </div>
      <div
        className={`p-0 m-0 home_outlet_div__conatiner ${
          showChats ? "open" : "close"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
