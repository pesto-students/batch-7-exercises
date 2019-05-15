import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {creatStore} from 'redux'

const store = creatStore(App,{});

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
