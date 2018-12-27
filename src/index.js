import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MainForm from './components/MainForm';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<MainForm />, document.getElementById('root'));

serviceWorker.unregister();
