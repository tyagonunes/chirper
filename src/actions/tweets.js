export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOOGLE_TWEET = 'TOOGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'
export const HANDLE_ADD_TWEET = 'HANDLE_ADD_TWEET'

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  }
}

export function handleAddTweet(text, replyingTo) {
  return {
    type: HANDLE_ADD_TWEET,
    text,
    replyingTo
  }
}

export function receiveTweets (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

export function toogleTweet ({ id, authedUser, hasLiked }) {
  return {
    type: TOOGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}