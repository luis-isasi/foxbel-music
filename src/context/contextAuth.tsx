import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { USER_SESSION } from '@Constants'
import type { User } from '@Types'

interface UserLocalStorage {
  token: string
  user: User
}

interface TypeContextUser {
  userAuth: undefined | null | UserLocalStorage
  signoutUser: () => void
  setDataUserLocalStorage: (dataUser: UserLocalStorage) => void
  isLoading: boolean
}

//Context
const ContextAuth = createContext<TypeContextUser | undefined>(undefined)

//Provider
export const ContextAuthProvider: React.FC = ({ children }) => {
  const [userAuth, setUserAuth] = useState<undefined | null | UserLocalStorage>(
    undefined
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    const dataUser: UserLocalStorage = JSON.parse(
      localStorage.getItem(USER_SESSION) as string
    )

    if (dataUser) {
      setUserAuth({
        token: dataUser.token,
        user: dataUser.user,
      })
    } else setUserAuth(null)

    //change isLoading
    setIsLoading(false)
  }, [])

  const setDataUserLocalStorage = (dataUser: UserLocalStorage) => {
    localStorage.setItem(USER_SESSION, JSON.stringify(dataUser))
    setUserAuth(dataUser)
  }

  const signoutUser = () => {
    localStorage.removeItem(USER_SESSION)
    setUserAuth(null)
    router.push('/')
  }

  return (
    <ContextAuth.Provider
      value={{
        userAuth,
        signoutUser,
        setDataUserLocalStorage,
        isLoading,
      }}
    >
      {children}
    </ContextAuth.Provider>
  )
}

//Hook
export const useContextAuth = () => {
  const dataUser = useContext(ContextAuth)

  if (typeof dataUser === 'undefined') {
    throw new Error('useUser must be withing ContextUserProvider')
  }

  return dataUser
}
