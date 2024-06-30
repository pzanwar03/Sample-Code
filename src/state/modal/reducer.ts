import { createReducer } from '@reduxjs/toolkit'
import { setLoadingModal, setSuccessModal, setFailedModal } from './actions'

export interface ModalState {
  readonly showLoadingModal: boolean
  readonly showSuccessModal: boolean
  readonly showFailedModal: boolean
}

const initialState: ModalState = {
  showLoadingModal: false,
  showSuccessModal: false,
  showFailedModal: false,
}

export default createReducer<ModalState>(initialState, builder =>
  builder
    .addCase(setLoadingModal, (state, { payload: { showLoadingModal } }) => {
      return {
        ...state,
        showLoadingModal
      }
    })
    .addCase(setSuccessModal, (state, { payload: { showSuccessModal } }) => {
      return {
        ...state,
        showSuccessModal
      }
    })
    .addCase(setFailedModal, (state, { payload: { showFailedModal } }) => {
      return {
        ...state,
        showFailedModal
      }
    })
)
