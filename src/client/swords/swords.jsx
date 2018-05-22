'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { getSwords } from '../redux'

export class Swords extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { status } = this.props.swords
        switch (status) {
            case 'unasked':
                return (
                    <>
                        <p>Nobody wants to see any swords, I guess.</p>
                        <button type="button" onClick={this.props.getSwords}>
                            Click to Load
                        </button>
                    </>
                )
            case 'loading':
                return <p>Loading some swords!</p>
            case 'loaded':
                return (
                    <ul>
                        {this.props.swords.collection.map(sword => (
                            <li key={sword.id}>
                                Sword called {sword.name} by {sword.smith.name}
                            </li>
                        ))}
                    </ul>
                )
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

const mapDispatchToProps = {
    getSwords,
}

// const mapDispatchToProps = dispatch => ({
//     getSwords: () => dispatch(getSwords()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Swords)
