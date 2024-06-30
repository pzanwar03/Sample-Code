import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'
import { setHashArray } from './actions'

export function useHashState(): AppState['hash'] {
  return useSelector<AppState, AppState['hash']>(state => state.hash)
}

export function useHashHandlers(): {
  setTxHash: (txHashArray: string) => void
} {
  const dispatch = useDispatch<AppDispatch>()

  const setTxHash = useCallback(
    (txHash: string) => {
      dispatch(
        setHashArray({
          txHash
        })
      )
    },
    [dispatch]
  )

  return {
    setTxHash,
  }
}
