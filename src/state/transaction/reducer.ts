import { createReducer } from '@reduxjs/toolkit'
import { setHashArray } from './actions'

export interface ModalState {
  // readonly txHashArray: string[]
  readonly txHash: string
}

const initialState: ModalState = {
  // txHashArray: [],
  txHash: '',
}

export default createReducer<ModalState>(initialState, builder =>
  builder
    .addCase(setHashArray, (state, { payload: { txHash } }) => {
      return {
        ...state,
        txHash
      }
    })
)
