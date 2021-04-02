import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

function NewTweet({ id }) {
  const [text, setText] = useState('')
  const [textLeft, setTextLeft] = useState(0)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const text = e.target.value
    setText(text)
    setTextLeft(280 - text.length)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleAddTweet(text, id))
    setText('')
  }
  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          maxLength={280} 
        />
        {textLeft <= 100 && (
          <div className="tweet-length">
            {textLeft}
          </div>
        )}
        <button className="btn" type="submit" disabled={text === ''}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default connect()(NewTweet)