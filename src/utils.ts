import { BASE_URL_ALLOW_ORIGIN } from '@Constants'

//FETCHER
export async function fetcher<DataResponse>({
  endpoint,
  method = 'GET',
  body,
}: {
  endpoint: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
}) {
  let headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
  }

  // if (typeof window !== 'undefined') {
  //   //TODO: agregar un type para user session
  //   let token: string | undefined = ''

  //   try {
  //     //only there's a token in local storage
  //     const tokenFromLS = window.localStorage.getItem(USER_SESSION)
  //     token = JSON.parse(tokenFromLS as string)?.token
  //   } catch (err) {
  //     console.error(err)
  //     token = ''
  //   }
  //   headers = { ...headers, Authorization: `Bearer ${token}` }
  // }

  const response = await fetch(
    `${BASE_URL_ALLOW_ORIGIN}${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
    {
      method: method,
      mode: 'cors',
      body: JSON.stringify(body),
      headers,
    }
  )

  let data = await response.json()

  console.log({ data })

  type MyResponse = DataResponse & {
    error?: string
  }

  return data as MyResponse
}
