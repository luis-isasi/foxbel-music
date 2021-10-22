import Image from 'next/image'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'

import { Track as TrackType } from '@Types'
import { useContextTrack } from '@Views/Home/context/contextTrack'
import React from 'react'

const Track: React.FC<{ track: TrackType }> = ({
  track: { artist, title_short, title },
  track,
}) => {
  const { setSelectedTrack } = useContextTrack()

  const handleClick = () => {
    setSelectedTrack(track)
  }

  return (
    <article className="min-h-52 h-auto min-w-40 w-40 mr-5 mb-5">
      <button className="relative h-40 w-40 group" onClick={handleClick}>
        <Image
          loader={({ src, width }) => `${src}?w=${width}`}
          src={artist.picture}
          alt={title_short}
          width={160}
          height={160}
          className="static"
        />
        <div className="absolute top-0 w-full h-full flex justify-center items-center z-5">
          <PlayArrowRoundedIcon
            className="fill-current text-white mx-auto opacity-50 group-hover:opacity-100"
            style={{
              fontSize: '50px',
            }}
          />
        </div>
      </button>
      <div className="p-2">
        <header>
          <h5 className="font-bold text-base text-gray-700">{title}</h5>
          <h6 className="text-sm font-light">{artist.name}</h6>
        </header>
      </div>
    </article>
  )
}

export default Track
