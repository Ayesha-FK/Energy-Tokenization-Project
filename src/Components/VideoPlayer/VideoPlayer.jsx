import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/BTCvideo.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = () => {
    setPlayState(false); // Close the video player when the close button is clicked
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
    >
      <video
        src={video}
        autoPlay
        muted
        controls
        playsInline
        className="video-content"
      ></video>
      {/* Close button */}
      <button className="close-button" onClick={closePlayer}>
        ×
      </button>
    </div>
  );
};

export default VideoPlayer;
