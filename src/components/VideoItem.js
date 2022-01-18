import React from "react";
import "./VideoItem.css";
const VideoItem = (props) => {
  return (
    <div className="ui list" onClick={() => props.onVideoSelect(props.video)}>
      <div className="item" className="video-item">
        <img
          alt={props.video.snippet.title}
          className="ui image"
          className="video-item-image"
          src={props.video.snippet.thumbnails.high.url}
        />
        <div className="content">
          <a className="header">{props.video.snippet.title}</a>
          <div className="description">
            Last seen watching{" "}
            <a>
              <b>Arrested Development</b>
            </a>{" "}
            just now.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
