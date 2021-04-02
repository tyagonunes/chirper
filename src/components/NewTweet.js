import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddTweet } from '../actions/tweets'

function NewTweet({ id }) {
  const [text, setText] = useState('')
  const [textLeft, setTextLeft] = useState(280)
  const [toHome, setToHome] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const text = e.target.value
    setText(text)
    setTextLeft(280 - text.length)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleAddTweet(text, id))
    setToHome(id ? false : true)
    setText('')
  }

  if(toHome === true) {
    return <Redirect to='/' />
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