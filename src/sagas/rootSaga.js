import { all } from 'redux-saga/effects'

import tweetSaga from './tweetSaga'
import sharedSaga from './sharedSaga'

export default function* rootSaga() {
  return yield all([
    tweetSaga,
    sharedSaga
  ])
}