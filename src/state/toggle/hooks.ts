import { useAppSelector, useAppDispatch } from '../hooks'
import { toggleNav } from '.'

// hook to easily interact with products state
export const useToggleState = () => {
  const dispatch = useAppDispatch()

  const _toggleNav = (payload: boolean) => dispatch(toggleNav(payload))

  const state= useAppSelector((state) => state.toast)
  

  return {state, _toggleNav }
}
