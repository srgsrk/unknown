import React, { Component } from 'react';
import Play from "./Play";
import './controls.css';

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <Play
                    onClick={() => this.props.onClick()}
                    isPlay={this.props.isPlay}
                />
            </div>
        )
    }
}

export default Controls;