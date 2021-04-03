import { createSelector } from 'reselect'

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