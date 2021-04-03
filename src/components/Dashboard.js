import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Tweet from './Tweet'
import { getTweetIds } from '../selectors' 

function Dashboard({ tweetIds }) {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {tweetIds.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  tweetIds: getTweetIds
})

export default connect(mapStateToProps)(Dashboard)