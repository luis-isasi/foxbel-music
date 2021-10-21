import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const Search = () => {
  return (
    <div>
      <form>
        <div className="min-w-88 border-1 h-9 border-gray-400 rounded-full  py-1 px-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Buscar"
            className="h-full focus:outline-none"
          />
          <SearchRoundedIcon className="fill-current text-gray-400" />
        </div>
      </form>
    </div>
  )
}

export default Search
