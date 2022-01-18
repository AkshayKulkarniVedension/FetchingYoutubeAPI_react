import React from "react";
import VideoItem from "./VideoItem";

const videoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  return <div>{renderedList} </div>;
};

export default videoList;
