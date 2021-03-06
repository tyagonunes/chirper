import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { fetchInitialData } from '../actions/shared'
import { getLoadingStatus } from '../selectors'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? 
              null : 
              <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' exact component={TweetPage} />
                <Route path='/new' exact component={NewTweet} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  loading: getLoadingStatus
})

export default connect(mapStateToProps)(App)