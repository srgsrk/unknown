import React, {Component} from 'react';
import './progress-bar.scss'

class ProgressBar extends Component {

    toMinutes = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = Math.round(time - minutes * 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return minutes + ':' + seconds;
    }

    render() {
        const {duration} = this.props;
        const {position} = this.props;
        return (
            <div className="progress">
                <progress
                    className="progress__bar"
                    max={this.props.duration}
                    value={this.props.position}
                    onClick={(e) => this.props.calcProgress(e)}
                />
                <div className="progress__stat">
                    {this.toMinutes(position)} / {this.toMinutes(duration)}
                </div>
            </div>
        )
    }
}

export default ProgressBar