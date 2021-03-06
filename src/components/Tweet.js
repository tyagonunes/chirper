import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router";
import { formatDate } from '../utils/helpers'
import { TiArrowBackOutline } from 'react-icons/ti' 
import { TiHeartOutline } from 'react-icons/ti' 
import { TiHeartFullOutline } from 'react-icons/ti'
import { Link, withRouter } from 'react-router-dom'
import { toogleTweet } from '../actions/tweets'
import { getAuthedUser, getFormatedTweet } from '../selectors'

function Tweet ({ tweet, dispatch, authedUser }) {
  const history = useHistory();

  function handleLike (e) {
    e.preventDefault()
    
    dispatch(toogleTweet({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }))
  }

  function toParent(e, id) {
    e.preventDefault()
    history.push(`/tweet/${id}`)
  }
  
  if(tweet === null) {
    return <p>This tweet doesnt exist</p>
  }

  const {
    name,
    avatar,
    timestamp,
    text,
    hasLiked,
    likes,
    replies,
    parent,
    id
  } = tweet

  return (
    <Link to={`/tweet/${id}`} className="tweet">
      <img
        src={avatar}
        alt={`Avatar of ${name}`}
        className='avatar'
      />
      <div className='tweet-info'>
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button 
              className="replying-to"
              onClick={(e) => toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>
        <div className='tweet-icons'>
          <TiArrowBackOutline className='tweet-icon' />
          <span>{replies !== 0 && replies}</span>
          <button className='heart-button' onClick={handleLike}>
            {hasLiked === true
              ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
              : <TiHeartOutline className='tweet-icon'/>}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </Link>
  )
}

const mapStateToProps = (state, { id }) => ({
  authedUser: getAuthedUser,
  tweet: getFormatedTweet(state, id)
})

export default withRouter(connect(mapStateToProps)(Tweet))