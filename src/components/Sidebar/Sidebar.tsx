import Image from 'next/image'

const Sidebar = () => {
  const classNameBtn = 'font-light mb-2'

  return (
    <div className="bg-red-secondary w-82 min-h-full text-white">
      <div className="flex justify-center my-7">
        <Image
          src="/img/foxbel-music.png"
          height={60}
          width={240}
          alt="Foxbel Music Logo"
        />
      </div>
      <div className="flex flex-col pl-10 pb-5 items-start">
        <h3 className="text-2xl font-medium mb-2">Mi librería</h3>
        <button className={classNameBtn}>Recientes</button>
        <button className={classNameBtn}>Artistas</button>
        <button className={classNameBtn}>Álbums</button>
        <button className={classNameBtn}>Canciones</button>
        <button className={classNameBtn}>Estaciones</button>
      </div>
      <div className="flex flex-col pl-10 pb-5 items-start">
        <h3 className="text-2xl font-medium mb-2">Playlist</h3>
        <button className={classNameBtn}>Metal</button>
      </div>
    </div>
  )
}

export default Sidebar
