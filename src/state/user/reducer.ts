import { createReducer } from '@reduxjs/toolkit'
import { setProfile, setMyDoge, setMyPuppy } from './actions'

export interface UserInfoState {
  readonly id: number
  readonly email: string | null
  readonly emailVerified: boolean | null
  readonly twitter: string | null
  readonly userName: string | null
  readonly discord: string | null
  readonly description: string | null
  readonly avatar: string | null
  readonly myDoge: any[]
  readonly myPuppy: any[]
}

const initialState: UserInfoState = {
  id: -1,
  email: '',
  emailVerified: false,
  twitter: '',
  userName: '',
  discord: '',
  description: '',
  avatar: '',
  myDoge: [],
  myPuppy: []
}

export default createReducer<UserInfoState>(initialState, builder =>
  builder
    .addCase(setProfile, (state, { payload: { id, email, emailVerified, twitter, userName, discord, description, avatar } }) => {
      return {
        ...state,
        id,
        email,
        emailVerified,
        twitter,
        userName,
        discord,
        description,
        avatar,
      }
    })
    .addCase(setMyDoge, (state, { payload: { myDoge } }) => {
      return {
        ...state,
        myDoge
      }
    })
    .addCase(setMyPuppy, (state, { payload: { myPuppy } }) => {
      return {
        ...state,
        myPuppy
      }
    })
)
