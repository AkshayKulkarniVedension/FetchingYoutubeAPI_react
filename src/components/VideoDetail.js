import React from "react";
import videoList from "./VideoList";

const VideoDetail = (props) => {
  if (!props.video) {
    return (
      <h1>
        SEARCH FOR ANY VIDEO YOU LIKE WE WILL FETCH IT FROM YOUTUBE FOR YOU
      </h1>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="videoPlayer" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
