import { IS_MOBILE, NOT_MOBILE } from './actions'

const initState = {
  isMobile: null
}

// Keep track of screen size.
export default function reducer(state = initState, action) {
  switch (action.type) {
  case IS_MOBILE:
    return { ...state, isMobile: true }
  case NOT_MOBILE:
    return { ...state, isMobile: false }
  default:
    return state
  }
}
