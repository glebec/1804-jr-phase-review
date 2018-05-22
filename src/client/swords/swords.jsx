'use strict'

import React from 'react'
import { connect } from 'react-redux'

export class Swords extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { status } = this.props.swords
        switch (status) {
            case 'unasked':
                return <p>Nobody wants to see any swords, I guess.</p>
            case 'loading':
                return <p>Loading some swords!</p>
            default:
                return (
                    <>
                        <h2>Swords</h2>
                        <p>swords will go here</p>
                    </>
                )
        }
    }
}

const mapStateToProps = ({ swords }) => ({
    swords,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Swords)
