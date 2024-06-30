import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'
import { setLoadingModal, setSuccessModal, setFailedModal } from './actions'

export function useModalState(): AppState['modal'] {
  return useSelector<AppState, AppState['modal']>(state => state.modal)
}

export function useModalHandlers(): {
  toggleLoadingModal: (showLoadingModal: boolean) => void
  togglesetSuccessModal: (showSuccessModal: boolean) => void
  toggleFailedModal: (showFailedModal: boolean) => void
} {
  const dispatch = useDispatch<AppDispatch>()

  const toggleLoadingModal = useCallback(
    (showLoadingModal: boolean) => {
      dispatch(
        setLoadingModal({
          showLoadingModal
        })
      )
    },
    [dispatch]
  )

  const togglesetSuccessModal = useCallback(
    (showSuccessModal: boolean) => {
      dispatch(
        setSuccessModal({
          showSuccessModal
        })
      )
    },
    [dispatch]
  )

  const toggleFailedModal = useCallback(
    (showFailedModal: boolean) => {
      dispatch(
        setFailedModal({
          showFailedModal
        })
      )
    },
    [dispatch]
  )

  return {
    toggleLoadingModal,
    togglesetSuccessModal,
    toggleFailedModal,
  }
}
