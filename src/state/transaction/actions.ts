import { createAction } from '@reduxjs/toolkit'

export const setHashArray = createAction<{
  // txHashArray: string[],
  txHash: string
}>('info/addHash')