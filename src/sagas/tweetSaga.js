import { all, takeLatest, call, select, put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading'
import { TOOGLE_TWEET, HANDLE_ADD_TWEET, addTweet } from '../actions/tweets'
import { saveLikeToggle, saveTweet } from '../utils/api'

function* toogleTweet({id, hasLiked, authedUser}) {
  yield call(saveLikeToggle, {id, hasLiked, authedUser})
}

function* handleAddTweet(action) {
  const { authedUser } = yield select()
  const {text, replyingTo } = action 
  const info = { text, author: authedUser, replyingTo }
  
  yield put(showLoading())
  const tweet = yield call(saveTweet, info)
  yield put(hideLoading())
  yield put(addTweet(tweet))
}

function* watchToogleTweet() {
  yield takeLatest(TOOGLE_TWEET, toogleTweet)
}

function* watchHandleAddTweet() {
  yield takeLatest(HANDLE_ADD_TWEET, handleAddTweet)
}

export default all([
  watchToogleTweet(),
  watchHandleAddTweet()
]);