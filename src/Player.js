import React, { Component } from 'react';
import Controls from "./Controls";
import Playlist from "./Playlist";

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: true,
        }
    }

    handleClick() {
        this.setState({
            isPlay: !this.state.isPlay
        });

        if(this.state.isPlay) {
            this.play();
        }
    }

    play() {

    }

    render() {
        return (
            <div className="player">
                <Playlist/>
                <Controls
                    onClick={() => this.handleClick()}
                    isPlay={this.state.isPlay}
                />
            </div>
        )
    }
}

export default Player;