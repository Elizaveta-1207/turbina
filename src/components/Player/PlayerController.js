import { useState, useEffect, useRef } from 'react';
import './PlayerController.css';
import playBtn from '../../images/play-icon.svg';
import pauseBtn from '../../images/pause-icon.svg';

function PlayerController ({ link }) {
  const [isPlaying, setPlayingState] = useState(false);

  const handlePlayClick = () => {
    setPlayingState(!isPlaying);
  }


  return (
    <>
      {/* <audio>
        <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"  type="audio/mp3" />
      </audio> */}
      <div className="player__controller">
        <button
          className="player__control-btn"
          type="button"
          onClick={handlePlayClick}
          style={{ backgroundImage: `url(${isPlaying ? pauseBtn : playBtn})` }}
        />
        <p className="player__song">
          Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров
        </p>
        <span className="player__timer">
          0:24
        </span>
        <div className="player__timeline" >
          <div className="player__progress" />
        </div>
      </div>
    </>
  )
}

export default PlayerController;
