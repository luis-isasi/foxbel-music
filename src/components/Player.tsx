import { useState } from 'react'

import Image from 'next/image'
import { useContextTrack } from '@Views/Home/context/contextTrack'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import PauseRoundedIcon from '@mui/icons-material/PauseRounded'
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded'
import ReactAudioPlayer from 'react-audio-player'

interface Music {
  state: 'pause' | 'play'
  volumen: number
}

const Player = () => {
  const { selectedTrack } = useContextTrack()
  const [music, setMusic] = useState<Music>()
  if (selectedTrack) {
    const { artist, title, title_short, album, preview } = selectedTrack

    const music = new Audio(preview)

    // music.
    const playMusic = () => {
      music.play()
    }

    const pauseMusic = () => {
      music.pause()
    }

    return (
      <div className="h-25 bottom-0 bg-red-primary flex justify-between items-center pr-5">
        <div className="flex items-center">
          <div className="relative min-w-25 w-25 min-h-25 h-25">
            <Image
              layout="responsive"
              loader={({ src }) => `${src}`}
              src={artist.picture}
              alt={title_short}
              width={100}
              height={100}
            />
          </div>
          <div className="p-2 text-white">
            <h5 className="font-bold text-base mb-2">{title}</h5>
            <p className="text-sm font-light">{`${artist.name} - ${album.title}`}</p>
          </div>
        </div>
        <div>
          {/* <ReactAudioPlayer src={preview} autoPlay controls /> */}
          <audio src={preview} autoPlay controls className="" />
          {/* <button onClick={playMusic}>
            <SkipPreviousRoundedIcon
              className="fill-current text-white "
              style={{ fontSize: '40px' }}
            />
          </button>
          <button onClick={playMusic}>
            <PlayArrowRoundedIcon
              className="fill-current text-white "
              style={{ fontSize: '80px' }}
            />
          </button>
          <button onClick={playMusic}>
            <SkipNextRoundedIcon
              className="fill-current text-white "
              style={{ fontSize: '40px' }}
            />
          </button> */}
        </div>
      </div>
    )
  }

  return (
    <div className="h-25 bottom-0 bg-red-primary text-white text-3xl">
      SELECCIONA UNA CANCION
    </div>
  )
}

export default Player
