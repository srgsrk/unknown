import React, { Component } from 'react';
import './track.scss'

class Track extends Component {
    constructor(props) {
        super(props);
        this.audio = React.createRef();
        this.state = {
            duration: null,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isPlay !== prevProps.isPlay || this.props.src !== prevProps.src) {
            this.props.isPlay ? this.play() : this.pause();
        }
        if (this.props.newPosition !== prevProps.newPosition) {
            this.goTo(this.props.newPosition);
        }
    }

    goTo = (position) => this.audio.current.currentTime = position;

    play = () => this.audio.current.play();

    pause = () => this.audio.current.pause();

    render() {
        const {src, name} = this.props;
        return (
            <div className="track">
                <div className="track__name">
                    {name}
                </div>
                <audio
                    preload="metadata"
                    className="track__audio"
                    src={src}
                    ref = {this.audio}
                    onLoadedMetadata={() => this.props.readMeta(this.audio.current.duration)}
                    onTimeUpdate={() => this.props.updateTime(this.audio.current.currentTime)}
                    onEnded={() => this.props.onEnded()}
                />
            </div>
        )
    }
}

export default Track;