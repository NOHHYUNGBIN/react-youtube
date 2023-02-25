import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { useDarkMode } from "../context/DarkmodeContext";

export default function WatchLaterButton() {
  const { darkMode } = useDarkMode();
  return (
    <div className="flex items-center justify-center">
      <button
        className={
          darkMode
            ? "flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-zinc-600 hover:bg-gray-800 transition-colors"
            : "flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-zinc-300 hover:bg-gray-600 transition-colors"
        }
      >
        <MdAccessTimeFilled className="text-2xl" />
        <span>나중에 볼 동영상</span>
      </button>
    </div>
  );
}
