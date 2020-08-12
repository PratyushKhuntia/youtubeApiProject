import React, { Fragment } from "react";
import Statistics from "../StatisticsComponents/Statistics";
import Moment from "react-moment";
import "moment-timezone";
function VideoDetails({ video, statistics }) {
  if (!video) {
    return "loading...";
  }
  let videoUrl = ` https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Fragment>
      <div>
        <iframe
          width="100%"
          height="500px"
          src={videoUrl}
          frameborder="0"
          allow="accelerometer; autoplay;
        encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        />
      </div>

      <div className="videoTitleBlock">
        <h1>{video.snippet.title}</h1>
        <div className="date_count_likeBlock">
          <div className="statistics">
            <Statistics statistics={statistics} video={video} />
          </div>
          <div className="date">
            <Moment format="D MMM YYYY" withTitle>
              {video.snippet.publishedAt}
            </Moment>
          </div>
        </div>
      </div>

      <p>{video.snippet.channelTitle}</p>
      <p>{video.snippet.description}</p>
    </Fragment>
  );
}

export default VideoDetails;
