import React, {Component} from 'react';
import './progress-bar.scss'

class ProgressBar extends Component {

    toMinutes = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = Math.round(time - minutes * 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + seconds;
    };

    render() {
        const {duration, position, calcProgress} = this.props;
        return (
            <div className="progress">
                <div className="progress__stat">
                    {this.toMinutes(position)} / {this.toMinutes(duration)}
                </div>
                <progress
                    className="progress__bar"
                    max={duration}
                    value={position}
                    onClick={(e) => calcProgress(e)}
                />
            </div>
        )
    }
}

export default ProgressBar