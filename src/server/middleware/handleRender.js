import React from 'react'
import { renderToString } from 'react-dom/server'
import renderFullPage from './renderFullPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from '../../common/store/configureStore'
import App from '../../common/components/App'
import reducer from '../../common/reducers';
import { fetchCounter } from '../../common/api/counter'
import qs from 'qs';
import TicTacState from '../../constants/tictacstate';
import Chat from '../../constants/Chat'

export default (req, res) => {

    // Read the counter from the request, if provided
    const params = qs.parse(req.query)

    const counter = parseInt(params.counter) ? Number(params.counter) :  0;
    const tictacto = TicTacState;
    const chat = Chat;
    // Compile an initial state
    const preloadedState = { tictacto, chat  }

    // Create a new Redux store instance
    const store = configureStore(preloadedState)

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    // Grab the initial state from our Redux store
    const finalState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState))
}