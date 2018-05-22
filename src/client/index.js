'use strict'

import React from 'react'
import reactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Swords from './swords/swords.jsx'
import store from './redux'

// const HelloWorld = () => <h1>Hello World</h1>

reactDOM.render(
    <Provider store={store}>
        <Swords />
    </Provider>,
    document.getElementById('app')
)
