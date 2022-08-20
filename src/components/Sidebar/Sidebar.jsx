import React from "react";
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
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li className="sidebar__list">
        <Link to="/">
          <MdHome size={23} />
          <span>Home</span>
        </Link>
      </li>
      <li className="sidebar__list">
        <Link to="/feed/subscriptions">
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </Link>
      </li>

      <li className="sidebar__list">
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>

      <li className="sidebar__list">
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li className="sidebar__list">
        <MdLibraryBooks size={23} />
        <span>Library</span>
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
