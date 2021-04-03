import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import reducer from './reducers'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ collapsed: true });

const store = createStore(reducer, applyMiddleware(
  sagaMiddleware,
  loggerMiddleware
))

sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
document.getElementById('root'))