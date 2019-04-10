import React, { Component } from 'react';

class Play extends Component {
    render() {
        return (
            <button className="play" onClick = {() => this.props.onClick()}>
                {this.props.isPlay ? '' : '' }
            </button>
        )
    }
}

export default Play;