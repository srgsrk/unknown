import React, { Component } from 'react';
import Controls from "./Controls";
import Track from "./Track";
import Cover from "./Cover"
import Playlist from "./Playlist";

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            currentTrackIndex: 0,
            playlist: [
                {
                    name: 'AudioTest_(1)',
                    src: 'http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg'
                },
                {
                    name: 'AudioTest_(2)',
                    src: 'http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(2).ogg'
                },
                {
                    name: 'AudioTest_(3)',
                    src: 'http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(3).ogg'
                },
                {
                    name: 'AudioTest_(4)',
                    src: 'http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(4).ogg'
                },
                {
                    name: 'AudioTest_(5)',
                    src: 'http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(5).ogg'
                },
            ]
        };
        this.handleClick = this.handleClick.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handleClick() {
        this.setState({
            isPlay: !this.state.isPlay
        });
    }

    handlePrev() {
        const index = this.state.currentTrackIndex;
        const playlist = this.state.playlist;
        if (index - 1 >= 0) {
            this.setState({currentTrackIndex: index - 1})
        } else {
            this.setState({currentTrackIndex: playlist.length - 1})
        }
    }

    handleNext() {
        const index = this.state.currentTrackIndex;
        const playlist = this.state.playlist;
        if (index + 1 >= playlist.length) {
            this.setState({currentTrackIndex: 0})
        } else {
            this.setState({currentTrackIndex: index + 1})
        }
    }

    render() {
        const playlist = this.state.playlist;
        const index = this.state.currentTrackIndex;
        return (
            <div className="player">
                <div className="player__content">
                    <div className="player__main">
                        <div className="player__cover">
                            <Cover
                                text={playlist[index].name}
                            />
                        </div>
                    </div>
                    <div className="player__sidebar">
                        <Playlist
                            playlist={playlist}
                            current={index}
                        />
                    </div>
                </div>
                <div className="player__bar">
                    <div className="bar__controls">
                        <Controls
                            handleClick={this.handleClick}
                            handlePrev={this.handlePrev}
                            handleNext={this.handleNext}
                            isPlay={this.state.isPlay}
                        />
                    </div>
                    <div className="bar__track-info">
                        <Track
                            src={playlist[index].src}
                            isPlay = {this.state.isPlay}
                            name={playlist[index].name}
                        />
                    </div>
                    <div className="bar__sidebar"></div>
            </div>
            </div>
        )
    }
}

export default Player;