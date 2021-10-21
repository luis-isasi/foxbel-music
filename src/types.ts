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

export interface Contributors {
  name: string
  link: string
  share: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  radio: boolean
  tracklist: string
  type: string
  role: string
}

export interface Track {
  id: string
  readable: boolean
  title: string
  title_short: string
  title_version: string
  isrc: string
  link: string
  share: string
  duration: string
  track_position: number
  disk_number: number
  rank: string
  release_date: string
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  bpm: number
  gain: number
  available_countries: string[]
  contributors: Contributors[]
  type: string
}
