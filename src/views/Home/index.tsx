import { ContextTrackProvider } from './context/contextTrack'
import Home from './Home'

const IndexHome = () => {
  return (
    <ContextTrackProvider>
      <Home />
    </ContextTrackProvider>
  )
}

export default IndexHome
