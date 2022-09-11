import React, { useState } from "react";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const [active, setActive] = useState("home");

  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li className={active === "home" ? "sidebar__list active" : "sidebar__list"}>
        <Link to="/" onClick={() => setActive("home")}>
          <MdHome size={23} />
          <span>Home</span>
        </Link>
      </li>
      <li className={active === "subs" ? "sidebar__list active" : "sidebar__list"}>
        <Link to="/feed/subscriptions" onClick={() => setActive("subs")}>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </Link>
      </li>

      <li className={active === "like" ? "sidebar__list active" : "sidebar__list"}>
        <Link to="/liked" onClick={() => setActive("like")}>
          <MdThumbUp size={23} />
          <span>Liked Video</span>
        </Link>
      </li>

      <li className={active === "history" ? "sidebar__list active" : "sidebar__list"}>
        <Link to="/history" onClick={() => setActive("history")}>
          <MdHistory size={23} />
          <span>History</span>
        </Link>
      </li>

      <li className={active === "library" ? "sidebar__list active" : "sidebar__list"}>
        <Link to="/library" onClick={() => setActive("library")}>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </Link>
      </li>

      <hr />

      <li className="sidebar__list" onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  );
};

export default Sidebar;
