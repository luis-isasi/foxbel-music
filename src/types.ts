import {
  MEDIAQUERY_SM,
  MEDIAQUERY_MD,
  MEDIAQUERY_LG,
  MEDIAQUERY_XL,
  MEDIAQUERY_2X1,
} from '@Constants'

//Media Query
export type MediaQuery =
  | typeof MEDIAQUERY_SM
  | typeof MEDIAQUERY_MD
  | typeof MEDIAQUERY_LG
  | typeof MEDIAQUERY_XL
  | typeof MEDIAQUERY_2X1

//User
export interface User {
  id: string
  name: string
  lastname: string
  firstname: string
  email: string
  status: number
  birthday: string
  inscription_date: string
  gender: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  country: string
  lang: string
  is_kid: boolean
  tracklist: string
  type: string
}
