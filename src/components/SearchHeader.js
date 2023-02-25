import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkmodeContext";
import styles from "./DarkMode.module.css";
export default function SearchHeader() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [text, setText] = useState("");
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleSummit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const handleClick = () => {
    window.open("https://github.com/NOHHYUNGBIN", "_blank");
  };
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">BeenTube</h1>
      </Link>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <form onSubmit={handleSummit} className="w-full flex justify-center">
        <input
          className={
            darkMode
              ? "w-7/12 p-2 border border-white bg-black text-gray-50"
              : "w-7/12 p-2 border border-black bg-white text-black"
          }
          type="text"
          placeholder="Search.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={darkMode ? "bg-zinc-600 px-4" : "bg-zinc-300 px-4"}>
          <BsSearch />
        </button>
      </form>
      <button className="mr-5">
        <Link to="/" className="flex items-center">
          <AiFillHome />
        </Link>
      </button>
      <button className="mr-10">
        <MdAccessTimeFilled />
      </button>
      <button onClick={handleClick}>
        <img
          className="w-10 h-8 rounded-full"
          src="../../img/NHB.JPG"
          alt="hbnoh"
        />
      </button>
    </header>
  );
}
