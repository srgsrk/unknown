import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <button
                className="play"
                onClick = {() => this.props.handleClick()}
                title = {this.props.isPlay ? 'Pause' : 'Play'}
            >
                {this.props.isPlay ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i> }
            </button>
        )
    }
}

export default Index;