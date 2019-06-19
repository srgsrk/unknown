import React, { Component } from 'react';
import Play from "../Play";
import Next from "../Next";
import Prev from "../Prev";
import './controls.scss'
import RepeatMode from "../RepeatMode";

class Controls extends Component {
    render() {
        const {isPlay, handlePrev, handlePlay, handleNext, repeatMode, handleRepeatMode} = this.props;
        return (
            <div className="controls">
                <Prev
                    handlePrev = {handlePrev}
                />
                <Play
                    handlePlay={handlePlay}
                    isPlay={isPlay}
                />
                <Next
                    handleNext = {handleNext}
                />
                <RepeatMode
                    repeatMode={repeatMode}
                    handleRepeatMode = {handleRepeatMode}
                />
            </div>
        )
    }
}

export default Controls;