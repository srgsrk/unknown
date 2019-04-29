import React, { Component } from 'react';
import Play from "../Play";
import Next from "../Next";
import Prev from "../Prev";
import './controls.scss'
import RepeatMode from "../RepeatMode";

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <Prev
                    handlePrev = {this.props.handlePrev}
                />
                <Play
                    handleClick={this.props.handleClick}
                    isPlay={this.props.isPlay}
                />
                <Next
                    handleNext = {this.props.handleNext}
                />
                <RepeatMode
                    repeatMode={this.props.repeatMode}
                    handleRepeatMode = {this.props.handleRepeatMode}
                />
            </div>
        )
    }
}

export default Controls;