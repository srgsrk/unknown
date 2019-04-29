import React, { Component } from 'react';
import Controls from "../Controls";
import Track from "../Track";
import Cover from "../Cover"
import Playlist from "../Playlist";
import mediaLibrary from "../../media-library"
import './player.scss'
import ProgressBar from "../ProgressBar";

class Player extends Component {
    state = {
        isPlay: false,
        currentTrackIndex: 0,
        mediaLibrary: mediaLibrary,
        currentTrackDuration: 100,
        currentTrackPosition: 0,
        repeatMode: 'off',
        repeatModeList: ['off', 'repeat-track', 'repeat-list']
    };

    isEnd = () => {
        const index = this.state.currentTrackIndex;
        const {mediaLibrary} = this.state;
        return this.state.repeatMode === 'off' && index === mediaLibrary.length - 1
    };

    handleClick = () => {
        this.setState({
            isPlay: !this.state.isPlay
        });
    };

    stop = () => {
        this.setState({
            currentTrackPosition: 0,
            isPlay: false
        });
    };

    repeat = () => {
        // TODO: Не хватает перемотки в начало
        this.setState({
            currentTrackPosition: 0,
            isPlay: true
        });
    };

    prev = () => {
        const index = this.state.currentTrackIndex;
        if (index - 1 >= 0) {
            this.setState({currentTrackIndex: index - 1})
        } else {
            this.state.isPlay && this.repeat();
        }
    };

    next = () => {
        const index = this.state.currentTrackIndex;
        const {mediaLibrary} = this.state;
        if (index + 1 >= mediaLibrary.length) {
            !this.isEnd() && this.setState({currentTrackIndex: 0});
        } else {
            this.setState({currentTrackIndex: index + 1})
        }
    };

    changeRepeatMode = () => {
        const {repeatMode} = this.state;
        const {repeatModeList} = this.state;
        const index = repeatModeList.indexOf(repeatMode);
        const newMode = index + 1 >= repeatModeList.length ? repeatModeList[0] : repeatModeList[index + 1];
        this.setState({
            repeatMode: newMode
        })
    };

    readMeta = (duration) => {
        this.setState({
            currentTrackDuration: duration
        });
    };

    updateTime = (position) => {
        this.setState({
            currentTrackPosition: position
        })
    };

    onEnded = () => {
        const {repeatMode} = this.state;
        switch (repeatMode) {
            case 'repeat-track':
                this.repeat();
                break;
            default:
                this.next();
        }
    };

    render() {
        const {mediaLibrary} = this.state;
        const index = this.state.currentTrackIndex;
        return (
            <div className="player">
                <div className="player__content">
                    <div className="player__main">
                        <div className="player__cover">
                            <Cover
                                text= {mediaLibrary[index].name}
                            />
                        </div>
                    </div>
                    <div className="player__sidebar">
                        <Playlist
                            mediaLibrary= {mediaLibrary}
                            current= {index}
                        />
                    </div>
                </div>
                <div className="player__bar">
                    <ProgressBar
                        duration= {this.state.currentTrackDuration}
                        position= {this.state.currentTrackPosition}
                    />
                    <div className="bar__content">
                        <div className="bar__controls">
                            <Controls
                                handleClick= {this.handleClick}
                                handlePrev= {this.prev}
                                handleNext= {this.next}
                                handleRepeatMode= {this.changeRepeatMode}
                                repeatMode= {this.state.repeatMode}
                                isPlay= {this.state.isPlay}
                            />
                        </div>
                        <div className="bar__track-block">
                            <Track
                                src= {mediaLibrary[index].src}
                                isPlay= {this.state.isPlay}
                                name= {mediaLibrary[index].name}
                                position= {this.state.position}
                                readMeta= {this.readMeta}
                                updateTime= {this.updateTime}
                                onEnded= {this.onEnded}
                            />
                        </div>
                        <div className="bar__sidebar"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;