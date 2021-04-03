import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import { getReplies } from '../selectors'

function TweetPage({ id, replies }) {
  return (
    <div>
      <Tweet id={id} />
      <NewTweet id={id} />
      { replies.length !== 0 && <h3 className="center">Replies</h3> }
      <ul>
        {replies.map((replyId) => (
          <li key={replyId}>
            <Tweet id={replyId} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps(state, props) {
  const { id } = props.match.params

  return {
    id,
    replies: getReplies(state, id)
  }
}

export default connect(mapStateToProps)(TweetPage)