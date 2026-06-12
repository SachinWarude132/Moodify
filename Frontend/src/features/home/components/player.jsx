import React, { useRef, useState, useEffect,  } from 'react'
import {useSong} from "../hooks/useSong"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import './player.scss'


const Player = () => {
  const { song } = useSong()
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [rate, setRate] = useState(1)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.playbackRate = rate
  }, [rate])

 useEffect(() => {
  const audio = audioRef.current

  if (!audio || !song?.url) return

  audio.src = song.url

  audio.play()
    .then(() => setPlaying(true))
    .catch(err => {
      console.error(err)
      setPlaying(false)
    })

}, [song])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  function seek(delta) {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, Math.min((duration || 0), audio.currentTime + delta))
    setCurrentTime(audio.currentTime)
  }

  function onTimeUpdate() {
    const audio = audioRef.current
    if (!audio) return
    setCurrentTime(audio.currentTime)
  }

  function onLoadedMetadata() {
    const audio = audioRef.current
    if (!audio) return
    setDuration(audio.duration || 0)
  }

  function onSeek(e) {
    const audio = audioRef.current
    if (!audio) return
    const t = Number(e.target.value)
    audio.currentTime = t
    setCurrentTime(t)
  }

  function fmt(t = 0) {
    if (!isFinite(t)) return '0:00'
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="player">
      <div className={`player__cover ${playing ? "playing" : ""}`}>
        <img src={song?.posterUrl} alt={song?.title} />
      </div>
      <div className="player__meta">
        <div className="player__title">{song?.title}</div>
        <div className="player__controls">
         <button
  className="btn"
  onClick={() => seek(-5)}
  title="Back 5 seconds"
>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22 6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM9.5 8.5H14.5V10H11V11.25H12.625C13.7986 11.25 14.75 12.2014 14.75 13.375 14.75 14.5486 13.7986 15.5 12.625 15.5H9.5V14H12.625C12.9702 14 13.25 13.7202 13.25 13.375 13.25 13.0298 12.9702 12.75 12.625 12.75H9.5V8.5Z" />
  </svg>
  
</button>

                        <button
                         className="btn btn--play"
                         onClick={togglePlay}
                         title="Play/Pause"
                        >
                         {playing ? <Pause /> : <Play />}
                        </button>

                      <button
  className="btn"
  onClick={() => seek(5)}
  title="Forward 5 seconds"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.47715 2 2 6.47715 2 12 2 17.5228 6.47715 22 12 22 17.5228 22 22 17.5228 22 12H20C20 16.4183 16.4183 20 12 20 7.58172 20 4 16.4183 4 12 4 7.58172 7.58172 4 12 4 14.7498 4 17.1755 5.38734 18.6155 7.50024L16 7.5V9.5H22V3.5H20L20.0001 5.99918C18.1757 3.57075 15.2713 2 12 2ZM9.5 8.5H14.5V10H11V11.25H12.625C13.7986 11.25 14.75 12.2014 14.75 13.375 14.75 14.5486 13.7986 15.5 12.625 15.5H9.5V14H12.625C12.9702 14 13.25 13.7202 13.25 13.375 13.25 13.0298 12.9702 12.75 12.625 12.75H9.5V8.5Z" />
  </svg>
</button>
          <div className="player__speed">
            <label>Speed</label>
            <select value={rate} onChange={e => setRate(Number(e.target.value))}>
              <option value={0.5}>0.5x</option>
              <option value={0.75}>0.75x</option>
              <option value={1}>1x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>
            
          </div>
        </div>
        <div className="player__progress">
          <span className="time">{fmt(currentTime)}</span>
          <input className="seek" type="range" min={0} max={duration || 0} value={currentTime} onChange={onSeek} />
          <span className="time">{fmt(duration)}</span>
        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoadedMetadata} />
    </div>
  )
}

export default Player