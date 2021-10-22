import RedirectHomeToken from '@/src/Hoc/RedirectHomeToken'

import Sidebar from '@Components/Sidebar'
import Search from '@Components/Search'
import User from '@Components/User'
import ContainerTracks from './sections/ContainerTracks'
import Player from '@Components/Player'

const Home = () => {
  return (
    <RedirectHomeToken>
      <div className="h-screen max-h-screen flex flex-col">
        <div className="flex-1 flex">
          <Sidebar />
          <div
            className="w-full px-10 h-auto overflow-y-auto scrool-none bg-scroolbar-white scroolbar"
            style={{ maxHeight: 'calc(100vh - 100px)' }}
          >
            <header className="w-full min-h-25 flex justify-between items-center">
              <Search />
              <User />
            </header>
            <ContainerTracks />
          </div>
        </div>
        <Player />
      </div>
    </RedirectHomeToken>
  )
}

export default Home
