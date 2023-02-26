import { MdAccessTimeFilled } from "react-icons/md";
import { useDarkMode } from "../context/DarkmodeContext";
import { message } from "antd";
import { useEffect, useState } from "react";
export default function WatchLaterButton({ video }) {
  const [messageApi, contextHolder] = message.useMessage();
  const { darkMode } = useDarkMode();
  const [savedVideos, setSavedVideos] = useState(() => readSavedVideos());
  const [isSaved, setIsSaved] = useState(
    savedVideos.some((v) => v.id === video.id)
  );
  const handleAdd = () => {
    if (isSaved) {
      messageApi.open({
        content: "이미 추가 된 동영상입니다.",
        className: "custom-class",
        style: {
          marginTop: "60vh",
        },
      });
    } else {
      setSavedVideos([...savedVideos, video]);
      setIsSaved(true);
    }
  };

  const handleRemove = () => {
    setSavedVideos(savedVideos.filter((v) => v.id !== video.id));
    setIsSaved(false);
  };

  useEffect(() => {
    localStorage.setItem("savedVideos", JSON.stringify(savedVideos));
  }, [savedVideos]);
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={isSaved ? handleRemove : handleAdd}
        className={
          darkMode
            ? "flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-zinc-600 hover:bg-gray-800 transition-colors"
            : "flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-zinc-300 hover:bg-gray-600 transition-colors"
        }
      >
        <MdAccessTimeFilled className="text-2xl" />
        <span>
          {isSaved ? "나중에 볼 동영상에서 해제" : "나중에 볼 동영상"}
        </span>
      </button>
      {contextHolder}
    </div>
  );
}
function readSavedVideos() {
  const savedVideos = localStorage.getItem("savedVideos");
  return savedVideos ? JSON.parse(savedVideos) : [];
}
