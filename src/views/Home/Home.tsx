import RedirectHomeToken from '@/src/Hoc/RedirectHomeToken'
import { useContextAuth } from '@Context/contextAuth'
import LayoutApp from '@Components/LayoutApp'

import Sidebar from '@Components/Sidebar'

const Home = () => {
  const { user } = useContextAuth()

  return (
    <RedirectHomeToken>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex ">
          <Sidebar />
          <div>{user?.user.name}</div>
        </div>
        {/* {reproductor} */}
        <div className="h-25 bottom-0 bg-red-primary">REPRODUCTOR</div>
      </div>
    </RedirectHomeToken>
  )
}

export default Home
