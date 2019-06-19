import React, { Component } from 'react';

class Index extends Component {
    render() {
        const {handlePlay, isPlay} = this.props;
        return (
            <button
                className="play"
                onClick = {() => handlePlay()}
                title = {isPlay ? 'Pause' : 'Play'}
            >
                {isPlay ? '' : '' }
            </button>
        )
    }
}

export default Index;