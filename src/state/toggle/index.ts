import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialStateProps {
  isNavOpen: boolean
}

const initialState: initialStateProps = {
  isNavOpen: false
}

const toastSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    toggleNav(state, action: PayloadAction<boolean>) {
      state.isNavOpen = action.payload
    },
  },
})

export default toastSlice.reducer

export const { toggleNav } = toastSlice.actions
