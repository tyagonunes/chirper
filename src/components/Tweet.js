import React from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'
import { TiArrowBackOutline } from 'react-icons/ti' 
import { TiHeartOutline } from 'react-icons/ti' 
import { TiHeartFullOutline } from 'react-icons/ti'

function Tweet ({ tweet }) {
  
  if(tweet === null) {
    return <p>This tweet doesnt exist</p>
  }

  const {
    name, avatar, timestamp, text, hasLiked, likes, replies, parent
  } = tweet

  return (
    <div className="tweet">
      <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
    </div>
  )
}

function mapStateToProps( { authedUser, users, tweets }, { id } ) {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet ) : null
  }
}

export default connect(mapStateToProps)(Tweet)