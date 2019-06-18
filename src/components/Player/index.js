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
        repeatModeList: ['off', 'repeat-track', 'repeat-list'],
        newPosition: 0
    };

    isEnd = () => {
        const {currentTrackIndex, mediaLibrary} = this.state;
        return this.state.repeatMode === 'off' && currentTrackIndex === mediaLibrary.length - 1
    };

    handleClick = () => {
        this.setState({
            isPlay: !this.state.isPlay
        });
    };

    stop = () => {
        this.setState({
            currentTrackPosition: 0,
            isPlay: false,
            newPosition: 0
        });
    };

    repeat = () => {
        // TODO: Не хватает перемотки в начало
        this.setState({
            currentTrackPosition: 0,
            isPlay: true,
            newPosition: 0
        });
    };

    prev = () => {
        const {currentTrackIndex} = this.state;
        if (currentTrackIndex - 1 >= 0) {
            this.setState({currentTrackIndex: currentTrackIndex - 1})
        } else {
            this.state.isPlay && this.repeat();
        }
    };

    next = () => {
        const {currentTrackIndex, mediaLibrary} = this.state;
        if (currentTrackIndex + 1 >= mediaLibrary.length) {
            !this.isEnd() && this.setState({currentTrackIndex: 0});
        } else {
            this.setState({currentTrackIndex: currentTrackIndex + 1})
        }
    };

    changeRepeatMode = () => {
        const {repeatMode, repeatModeList} = this.state;
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

    calcProgress = (e) => {
        const progress = e.currentTarget;
        const width = progress.offsetWidth;
        const left = progress.getBoundingClientRect().left;
        const pointer = e.clientX;
        const position = Math.round((pointer - left) / width * 100);
        this.setPosition(position);
    };

    setPosition = (percent) => {
        const {currentTrackDuration} = this.state;
        const newPosition = currentTrackDuration * percent / 100;
        this.setState({
            newPosition: newPosition,
            currentTrackPosition: newPosition
        });
    };

    onEnded = () => {
        const {repeatMode} = this.state;
        repeatMode === 'repeat-track' ? this.repeat() : this.next();
    };

    selectTrack = (index) => {
        this.setState({
                currentTrackIndex: index,
            }
        )
    };

    render() {
        const {currentTrackIndex, mediaLibrary, currentTrackDuration, currentTrackPosition,repeatMode, isPlay, position, newPosition} = this.state;
        return (
            <div className = "player">
                <div className = "player__content">
                    <div className = "player__main">
                        <div className = "player__cover">
                            <Cover
                                text = {mediaLibrary[currentTrackIndex].name}
                            />
                        </div>
                    </div>
                    <div className = "player__sidebar">
                        <Playlist
                            mediaLibrary = {mediaLibrary}
                            current = {currentTrackIndex}
                            selectTrack = {this.selectTrack}
                        />
                    </div>
                </div>
                <div className="player__bar">
                    <ProgressBar
                        duration = {currentTrackDuration}
                        position = {currentTrackPosition}
                        calcProgress = {this.calcProgress}
                    />
                    <div className="bar__content">
                        <div className="bar__controls">
                            <Controls
                                handleClick = {this.handleClick}
                                handlePrev = {this.prev}
                                handleNext = {this.next}
                                handleRepeatMode = {this.changeRepeatMode}
                                repeatMode = {repeatMode}
                                isPlay = {isPlay}
                            />
                        </div>
                        <div className="bar__track-block">
                            <div className="bar__cover">
                                <Cover
                                    text = {mediaLibrary[currentTrackIndex].name}
                                />
                            </div>
                            <div className="bar__track">
                                <Track
                                    src = {mediaLibrary[currentTrackIndex].src}
                                    isPlay = {isPlay}
                                    name = {mediaLibrary[currentTrackIndex].name}
                                    position = {position}
                                    readMeta = {this.readMeta}
                                    updateTime = {this.updateTime}
                                    onEnded = {this.onEnded}
                                    newPosition = {newPosition}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;