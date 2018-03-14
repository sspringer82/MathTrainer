import React from 'react';
import ReactDOM from 'react-dom';
import { Trainer } from './Trainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Trainer />, document.getElementById('root'));
registerServiceWorker();
