import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { QueryClient } from 'react-query'

import { useContextAuth } from '@Context/contextAuth'
import userServices from '@/src/services/user'

const RedirectHomeToken: React.FC = ({ children }) => {
  const router = useRouter()
  const queryClient = new QueryClient()
  const { setDataUserLocalStorage, isLoading } = useContextAuth()

  let currentURL: string | undefined = undefined

  if (typeof window !== 'undefined') {
    currentURL = window?.location?.href
  }

  useEffect(() => {
    if (currentURL && currentURL !== '/home') {
      ;(async () => {
        if (currentURL.includes('#')) {
          let newUrl = currentURL.replace('#', '?')
          router.replace(newUrl)
        } else {
          const access_token: string = router?.query?.access_token as string
          if (access_token) {
            //obtener data del usuario y guardar el token y el user
            const data = await queryClient.fetchQuery('user', () =>
              userServices.getUser(access_token)
            )
            setDataUserLocalStorage({
              user: data,
              token: access_token,
            })
            router.replace('/home')
          }
        }
      })()
    }
  }, [currentURL])

  if (isLoading) return <p>cargando .....</p>
  return <>{children}</>
}

export default RedirectHomeToken
