import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'src/index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
