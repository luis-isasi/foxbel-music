import PersonRoundedIcon from '@mui/icons-material/PersonRounded'

import { useContextAuth } from '@Context/contextAuth'

const User = () => {
  const { userAuth } = useContextAuth()

  const handleClick = () => {}
  return (
    <button className="flex items-center group ">
      <PersonRoundedIcon className="fill-current text-red-main mr-2 group-hover:text-red-600" />
      <h3 className="text-xl font-normal group-hover:text-gray-700">
        {userAuth?.user.name}
      </h3>
    </button>
  )
}

export default User
