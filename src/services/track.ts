import { fetcher } from '@Utils'
import { Track } from '@Types'

const getTracks = (text: string) => {
  return fetcher<{ data: Track[] }>({
    endpoint: `/search?q=${text}`,
    method: 'GET',
  })
}

const track = {
  getTracks,
}

export default track
