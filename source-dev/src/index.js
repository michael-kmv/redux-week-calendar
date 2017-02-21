import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'
import { getPossibleInitState } from './utils/initstate'

let initState = getPossibleInitState();
const store = configureStore(initState);

render(
  <Provider store={store}>
    <div className='app'>
      <h1 className='appHeader'>SET SCHEDULE</h1>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
