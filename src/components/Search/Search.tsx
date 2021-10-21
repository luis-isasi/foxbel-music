import { useCallback, useState } from 'react'
import { useQueryClient } from 'react-query'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import _debounce from 'lodash.debounce'

import { useContextTrack } from '@Views/Home/context/contextTrack'
import track from '@/src/services/track'

const Search = () => {
  const [text, setText] = useState<string>('')
  const queryClient = useQueryClient()
  const { setFoundTracks, foundTracks } = useContextTrack()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setText(value)
    getTracks(value)
  }

  const getTracks = useCallback(
    _debounce(async (value: string) => {
      const data = await queryClient.fetchQuery('tracks', () =>
        track.getTracks(value)
      )
      setFoundTracks(data?.data)
    }, 400),
    []
  )

  return (
    <div>
      <form>
        <div className="min-w-88 w-102 border-1 h-9 border-gray-400 rounded-full py-1 px-4 flex justify-between items-center">
          <input
            value={text}
            onChange={handleChange}
            type="text"
            placeholder="Buscar"
            className="w-full h-full focus:outline-none"
          />
          <SearchRoundedIcon className="fill-current text-gray-400" />
        </div>
      </form>
    </div>
  )
}

export default Search
