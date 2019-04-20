import React, { Component } from 'react';
import Controls from "../Controls";
import Track from "../Track";
import Cover from "../Cover"
import Playlist from "../Playlist";
import mediaLibrary from "../../media-library"
import './style.css'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false,
            currentTrackIndex: 0,
            mediaLibrary: mediaLibrary
        };
    }

    handleClick = () => {
        this.setState({
            isPlay: !this.state.isPlay
        });
    }

    handlePrev = () => {
        const index = this.state.currentTrackIndex;
        const mediaLibrary = this.state.mediaLibrary;
        if (index - 1 >= 0) {
            this.setState({currentTrackIndex: index - 1})
        } else {
            this.setState({currentTrackIndex: mediaLibrary.length - 1})
        }
    }

    handleNext = () => {
        const index = this.state.currentTrackIndex;
        const mediaLibrary = this.state.mediaLibrary;
        if (index + 1 >= mediaLibrary.length) {
            this.setState({currentTrackIndex: 0})
        } else {
            this.setState({currentTrackIndex: index + 1})
        }
    }

    render() {
        const mediaLibrary = this.state.mediaLibrary;
        const index = this.state.currentTrackIndex;
        return (
            <div className="player">
                <div className="player__content">
                    <div className="player__main">
                        <div className="player__cover">
                            <Cover
                                text={mediaLibrary[index].name}
                            />
                        </div>
                    </div>
                    <div className="player__sidebar">
                        <Playlist
                            mediaLibrary={mediaLibrary}
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
                            src={mediaLibrary[index].src}
                            isPlay = {this.state.isPlay}
                            name={mediaLibrary[index].name}
                        />
                    </div>
                    <div className="bar__sidebar"></div>
            </div>
            </div>
        )
    }
}

export default Player;