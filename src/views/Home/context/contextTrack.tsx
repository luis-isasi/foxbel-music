import { createContext, useContext, useState } from 'react'

import { Track } from '@Types'

interface TypeContextTrack {
  selectedTrack: Track | null
  setSelectedTrack: (track: Track) => void
  foundTracks: Track[]
  setFoundTracks: (tracks: Track[]) => void
}

const ContextTrack = createContext<TypeContextTrack | undefined>(undefined)

export const ContextTrackProvider: React.FC = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
  const [foundTracks, setFoundTracks] = useState<Track[]>([])

  console.log({ selectedTrack })

  return (
    <ContextTrack.Provider
      value={{ selectedTrack, setSelectedTrack, foundTracks, setFoundTracks }}
    >
      {children}
    </ContextTrack.Provider>
  )
}

export const useContextTrack = () => {
  const data = useContext(ContextTrack)

  if (!data) {
    throw new Error('You must within context track')
  }

  return data
}
