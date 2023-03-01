import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { ImSpinner10 } from "react-icons/im";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 6 * 1,
  });
  return (
    <>
      <div className="text-lg flex justify-center mb-5">
        Videos🔍 {keyword ? `: ${keyword}` : ": 🔥Hot🔥"}
      </div>
      {isLoading && (
        <p>
          <ImSpinner10 />
        </p>
      )}
      {error && <p>데이터를 찾을 수 없습니다.</p>}

      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
