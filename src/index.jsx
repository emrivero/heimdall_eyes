import './assets/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configuration from './configuration/configuration';

ReactDOM.render(<App configuration={configuration} />, document.getElementById('root'));
