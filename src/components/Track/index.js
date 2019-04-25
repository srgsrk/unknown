import React, { Component } from 'react';
import './track.scss'

class Track extends Component {
    constructor(props) {
        super(props);
        this.audio = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (this.props.isPlay !== prevProps.isPlay || this.props.src !== prevProps.src) {
            this.props.isPlay ? this.play() : this.pause();
        }
    }

    play() {
        this.audio.current.play();
    }

    pause() {
        this.audio.current.pause();
    }

    render() {
        const src = this.props.src;
        return (
            <div className="track">
                <div className="track__name">
                    {this.props.name}
                </div>
                <audio
                    className="track__audio"
                    src={src}
                    ref = {this.audio}
                />
            </div>
        )
    }
}

export default Track;