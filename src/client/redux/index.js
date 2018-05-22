'use strict'

import { createStore } from 'redux'

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

const initialState = {
    swords: {
        status: 'unasked',
    },
}

const reducer = (state = initialState, action) => {
    return state
}

const store = createStore(reducer)

export default store
