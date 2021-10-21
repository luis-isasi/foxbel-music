import Image from 'next/image'
import MyLink from '@Components/Links/MyLink'

import LogoSmall from '@/public/img/foxbel-music.png'

const App = () => {
  return (
    <div>
      <header className="h-12 bg-red-200">
        <div className="max-w-2xl h-full mx-auto flex justify-between items-center px-3 xl:px-0">
          <Image
            src={LogoSmall}
            height={40}
            width={160}
            alt="Foxbel Music Logo"
            className="mx-auto"
          />
          <a
            href={`https://connect.deezer.com/oauth/auth.php?app_id=${process.env.NEXT_PUBLIC_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&perms=basic_access,email&response_type=token&offline_access=true`}
            className="font-bold hover:text-gray-700"
          >
            Login
          </a>
        </div>
      </header>
      <div className="text-center">
        <p className="mx-auto max-w-98 text-4xl font-bold my-10">
          Toda la música que deseas en un mismo lugar 🎧
        </p>
        <p className="mx-auto max-w-102">
          Encuentra todo tipo de música de tus mejores artistas, sus mejores
          albums, Flobex Music lo nuevo en la industria musical
        </p>
      </div>
    </div>
  )
}

export default App
