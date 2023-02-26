import React, { useState } from "react";
import VideoCard from "../components/VideoCard";

export default function WatchLaterVideos() {
  const [savedVideos, setSavedVideos] = useState(() => readSavedVideos());

  return (
    <>
      <div className="text-lg flex justify-center mb-5">
        {savedVideos.length > 0 && `나중에 볼 동영상 리스트`}
      </div>
      {savedVideos.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {savedVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      ) : (
        <h1 className="text-lg flex justify-center mt-10">
          동영상이 없습니다. 나중에 볼 동영상을 추가해 보세요!
        </h1>
      )}
    </>
  );
}
function readSavedVideos() {
  const savedVideos = localStorage.getItem("savedVideos");
  return savedVideos ? JSON.parse(savedVideos) : [];
}
