import { useRouter } from 'next/router'

const Home = () => {
  const { query } = useRouter()
  console.log({ query })
  console.log(window.location.href)

  return <div>DESDE HOME</div>
}

export default Home
