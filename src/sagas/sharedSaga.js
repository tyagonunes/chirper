import { all, takeLatest, put, call } from 'redux-saga/effects'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveTweets } from '../actions/tweets'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { getInitialData } from '../utils/api'
import { FETCH_INITIAL_DATA } from '../actions/shared'

function* fetchInitialData(action) {
  yield put(showLoading())
  const { users, tweets } = yield call(getInitialData)
  yield all([
    put(receiveUsers(users)),
    put(receiveTweets(tweets)),
    put(setAuthedUser(action.authedId)),
    put(hideLoading())
  ])
}

function* watchInitialData() {
  yield takeLatest(FETCH_INITIAL_DATA, fetchInitialData)
}

export default all([
  watchInitialData()
])