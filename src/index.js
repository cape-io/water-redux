import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import createStore from './createStore'
import { getWindowAction } from './screen/actions'

const props = {
  splashPage: { adminLoggedIn: true },
}
const store = createStore(props)

window.addEventListener('resize', () => store.dispatch(getWindowAction()))

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
registerServiceWorker();
