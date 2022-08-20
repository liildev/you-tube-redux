import React, { useState } from "react";
import logo from "../../assets/youtube.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./_header.scss";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${input}`);
  };
  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="header ">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
