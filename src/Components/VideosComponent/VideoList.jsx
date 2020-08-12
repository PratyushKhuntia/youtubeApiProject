import React from "react";
import VideoItem from "./VideoItem";
import "../../youtube.css";
function VideoList({ videos, onSelectedVideo }) {
  const renderVideos = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        onSelectedVideo={onSelectedVideo}
      />
    );
  });
  return (
    <div className="rightList">
      <h1>{renderVideos}</h1>
    </div>
  );
}

export default VideoList;
