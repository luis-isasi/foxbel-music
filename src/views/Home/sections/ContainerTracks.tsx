import { useContextTrack } from '../context/contextTrack'
import Track from '@Components/Track'

const ContainerTracks = () => {
  const { foundTracks } = useContextTrack()

  const renderTracks = () => {
    return foundTracks.map((track) => {
      const { id, title } = track
      return <Track key={`${id}${title}`} track={track} />
    })
  }
  return (
    <section>
      <p className="text-red-main text-4xl font-semibold my-5">Resultados</p>
      <div className="flex justify-evenly flex-wrap">
        {foundTracks?.length ? renderTracks() : 'Busque su canción favorita 😀'}
      </div>
    </section>
  )
}

export default ContainerTracks
