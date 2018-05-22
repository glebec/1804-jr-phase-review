'use strict'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

const REQUESTED_SWORDS = 'REQUESTED_SWORDS'
const GOT_SWORDS = 'GOT_SWORDS'
const FAILED_SWORDS = 'FAILED_SWORDS'

const requestedSwords = () => ({
    type: REQUESTED_SWORDS,
    payload: {
        status: 'loading',
    },
})

const gotSwords = swords => ({
    type: GOT_SWORDS,
    payload: {
        status: 'loaded',
        collection: swords,
    },
})

const failedSwords = error => ({
    type: FAILED_SWORDS,
    payload: {
        status: 'error',
        error,
    },
})

export const getSwords = () => async dispatch => {
    dispatch(requestedSwords())
    try {
        const swords = await axios.get('/swords').then(res => res.data)
        dispatch(gotSwords(swords))
    } catch (err) {
        console.error(err)
        dispatch(failedSwords(err))
    }
}

const initialState = {
    swords: {
        status: 'unasked',
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_SWORDS:
        case GOT_SWORDS:
        case FAILED_SWORDS:
            return { swords: action.payload } // works for this reducer, not all!
        default:
            return state
    }
}

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

export default store
