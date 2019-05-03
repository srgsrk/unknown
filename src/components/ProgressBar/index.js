import React, {Component} from 'react';
import './progress-bar.scss'

class ProgressBar extends Component {

    render() {
        return (
            <progress
                className="progress-bar"
                max={this.props.duration}
                value={this.props.position}
                onClick={(e) => this.props.calcProgress(e)}
            />
        )
    }
}

export default ProgressBar