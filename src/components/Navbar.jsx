import React, { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { fetchnews } from "../context/news/NewsAction";
import NewsContext from "../context/news/NewsContext";

const Navbar = () => {
  const { dispatch } = useContext(NewsContext);
  const [search, setsearch] = useState("");
  const [open, setopen] = useState(false);
  const handlesearch = async (e) => {
    e.preventDefault();
    const data = await fetchnews(search);
    dispatch({
      type: "GET_DATA",
      payload: { news: data, topic: search },
    });
    setsearch("");
  };
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>

        <ul className={open ? "mobile" : "ul"}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/sports">sports</Link>
          </li>
          <li>
            <Link to="/politics">politics</Link>
          </li>
          <li>
            <Link to="/bollywood">bollywood</Link>
          </li>
          <li>
            <Link to="/lifestyle">lifestyle</Link>
          </li>
        </ul>

        <form onSubmit={handlesearch}>
          <div className="input">
            <IoSearch className="search" />
            <input
              type="text"
              placeholder="search news..."
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          <div className="save-btn">search</div>
        </form>

        <div className="humberger" onClick={() => setopen(!open)}>
          {open ? <MdClose size={25} /> : <RiMenu3Fill size={25} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
