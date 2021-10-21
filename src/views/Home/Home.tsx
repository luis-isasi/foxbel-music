import RedirectHomeToken from '@/src/Hoc/RedirectHomeToken'
import { useContextAuth } from '@Context/contextAuth'

const Home = () => {
  const { user } = useContextAuth()

  return (
    <RedirectHomeToken>
      <div>{user?.user.name}</div>
    </RedirectHomeToken>
  )
}

export default Home
