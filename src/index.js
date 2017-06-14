import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import createStore from './createStore'

const props = {
  splashPage: { adminLoggedIn: true },
}
const store = createStore(props)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
