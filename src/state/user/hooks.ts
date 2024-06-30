import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'
import { setProfile, setMyDoge, setMyPuppy } from './actions'

export function useUserState(): AppState['user'] {
  return useSelector<AppState, AppState['user']>(state => state.user)
}

export function useUserHandlers(): {
  setUserProfile: (id: number, email: string | null, emailVerified: boolean | null, twitter: string | null, userName: string | null, discord: string | null, description: string | null, avatar: string | null) => void,
  setUserDoge: (myDoge: any[]) => void,
  setUserPuppy: (myPuppy: any[]) => void,
} {
  const dispatch = useDispatch<AppDispatch>()
  const setUserProfile = useCallback(
    (id: number, email: string | null, emailVerified: boolean | null, twitter: string | null, userName: string | null, discord: string | null, description: string | null, avatar: string | null) => {
      dispatch(
        setProfile({
          id, email, emailVerified, twitter, userName, discord, description, avatar
        })
      )
    },
    [dispatch]
  )

  const setUserDoge = useCallback(
    (myDoge: any[]) => {
      dispatch(
        setMyDoge({
          myDoge
        })
      )
    },
    [dispatch]
  )

  const setUserPuppy = useCallback(
    (myPuppy: any[]) => {
      dispatch(
        setMyPuppy({
          myPuppy
        })
      )
    },
    [dispatch]
  )

  return {
    setUserProfile,
    setUserDoge,
    setUserPuppy,
  }
}
