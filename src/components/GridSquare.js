import React, {Component} from 'react'

export default class GridSquare extends Component {
    render () {
        const classes = `grid-square color-${this.props.color}`
        return <div className={classes} />
    }
}