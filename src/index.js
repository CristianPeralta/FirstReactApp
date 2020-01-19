import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Hi Guys" />, document.getElementById('root'));
registerServiceWorker();
