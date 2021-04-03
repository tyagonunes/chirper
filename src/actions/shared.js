export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA'

const AUTHED_ID = 'tylermcginnis'

export const fetchInitialData = () => ({
  type: FETCH_INITIAL_DATA,
  authedId: AUTHED_ID
})