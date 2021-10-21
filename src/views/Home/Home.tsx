import RedirectHomeToken from '@/src/Hoc/RedirectHomeToken'

import Sidebar from '@Components/Sidebar'
import Search from '@Components/Search'
import User from '@Components/User'
import ContainerTracks from './sections/ContainerTracks'

const Home = () => {
  return (
    <RedirectHomeToken>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex ">
          <Sidebar />
          <div className="w-full px-10">
            <header className="w-full min-h-25 flex justify-between items-center ">
              <Search />
              <User />
            </header>
            <ContainerTracks />
          </div>
        </div>
        {/* {reproductor} */}
        <div className="h-25 bottom-0 bg-red-primary">REPRODUCTOR</div>
      </div>
    </RedirectHomeToken>
  )
}

export default Home
