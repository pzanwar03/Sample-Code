import { createAction } from '@reduxjs/toolkit'

export const setLoadingModal = createAction<{
  showLoadingModal: boolean,
}>('info/setLoadingModal')

export const setSuccessModal = createAction<{
  showSuccessModal: boolean,
}>('info/setSuccessModal')

export const setFailedModal = createAction<{
  showFailedModal: boolean,
}>('info/setFailedModal')