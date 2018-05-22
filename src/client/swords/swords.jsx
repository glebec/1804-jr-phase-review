'use strict'

import React from 'react'

export default class Swords extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            swords: [],
        }
    }

    render() {
        return (
            <>
                <h2>Swords</h2>
                <p>swords will go here</p>
            </>
        )
    }
}
