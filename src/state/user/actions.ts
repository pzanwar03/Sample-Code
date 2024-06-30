import { createAction } from '@reduxjs/toolkit'

export const setProfile = createAction<{
  id: number,
  email: string | null,
  emailVerified: boolean | null,
  twitter: string | null,
  userName: string | null,
  discord: string | null,
  description: string | null,
  avatar: string | null
}>('info/setProfile')

export const setMyDoge = createAction<{
  myDoge: any[]
}>('info/setDoge')

export const setMyPuppy = createAction<{
  myPuppy: any[]
}>('info/setPuppy')