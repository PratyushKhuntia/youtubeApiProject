import React from "react";
import "./videos.styles.css";

import Moment from "react-moment";
import "moment-timezone";
function VideoItem({ video, onSelectedVideo }) {
  return (
    <div className="videoList" onClick={() => onSelectedVideo(video)}>
      <div className="videoBlocks_img">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="videoBlock_description">
        <h1>{video.snippet.title}</h1>
        <p className="channel_title">
          {video.snippet.channelTitle}
          <br />
          <i class="fa fa-circle" aria-hidden="true"></i>
          <span>
            <Moment fromNow ago>
              {video.snippet.publishTime}
            </Moment>
            <span style={{ margin: "0px 5px" }}>ago</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default VideoItem;
