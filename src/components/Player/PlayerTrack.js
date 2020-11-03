import './PlayerTrack.css';
import React, { useState, useEffect } from 'react';

function PlayerTrack({ track, onTrackClick, inList, isLoading }) {

  const [loading, setLoading] = useState(isLoading)

  const trackStyle = `player__track ${ inList && 'player__track_info'} ${ loading && 'player__track_loading'}`

  const handleClick = () => {
    if (onTrackClick) {
      onTrackClick(track)
    }  
  }

  useEffect(() => {
    console.log('isLoading ', Boolean(isLoading))
    setTimeout(()=> {
      setLoading(false)
    }, 100)
    
  }, [isLoading])

  return (
      <button onClick={handleClick} className={trackStyle}>
        {`${track.trackName} — ${track.group} feat. ${track.author}`}
      </button>
  )
}

export default PlayerTrack;