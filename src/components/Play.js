import React, { Component } from 'react';

class Play extends Component {
    render() {
        return (
            <button className="play" onClick = {() => this.props.handleClick()}>
                {this.props.isPlay ? '' : '' }
            </button>
        )
    }
}

export default Play;