import React, { Component } from 'react';
import Play from "../Play";
import Next from "../Next";
import Prev from "../Prev";
import './controls.scss'

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
            </div>
        )
    }
}

export default Controls;