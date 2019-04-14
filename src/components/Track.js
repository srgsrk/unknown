import React, { Component } from 'react';

class Track extends Component {
    render() {
        const isPlay = this.props.isPlay;
        const src = this.props.src;
        const track = new Audio(src);
        if (isPlay) {
            track.play();
        } else {
            track.pause();
        }
        return (
            <div className="track">
                <div className="track__name">
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default Track;