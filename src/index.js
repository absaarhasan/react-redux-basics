import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route} from 'react-router-dom'
import store, { history } from './redux/store';

import Home from './containers/home/Home';
import Planets from './containers/planets/Planets';

import './index.css';
const target = document.querySelector('#root')

ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/planets/:planet" component={Planets} />
               </div>
            </ConnectedRouter>
        </Provider>,
    target);



