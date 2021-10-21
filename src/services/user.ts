import { fetcher } from '@Utils'
import { User } from '@Types'

const getUser = (access_token: string) => {
  return fetcher<User>({
    endpoint: `/user/me?access_token=${access_token}`,
    method: 'GET',
  })
}

const userServices = {
  getUser,
}

export default userServices
