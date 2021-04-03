import { createSelector } from 'reselect'
import { formatTweet } from '../utils/helpers'

export const getAuthedUser = state => state.authedUser
export const getUsers = state => state.users
export const getTweets = state => state.tweets

export const getTweetIds = createSelector(
  getTweets,
  (tweets) => Object.keys(tweets).sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
)

export const getLoadingStatus = createSelector(
  getAuthedUser,
  authedUser => authedUser === null 
)

const getParamId = (state, id) => id

export const getReplies = createSelector(
  [getTweets, getParamId],
  (tweets, id) => !tweets[id] ? [] : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
)

export const getFormatedTweet = createSelector(
  [
    getTweets,
    getAuthedUser,
    getUsers,
    getParamId
  ],
  (
    tweets,
    authedUser,
    users,
    id
  ) => {
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet ) : null
  }
)