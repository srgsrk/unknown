import React, { Component } from 'react';

class Playlist extends Component {
    render() {
        const playlist = [];
        this.props.playlist.forEach((track, index) => {
            const listItemClasses = index === this.props.current ? "playlist__item active" : "playlist__item"
            playlist.push(
                <li
                    className={listItemClasses}
                    key={track.src}
                >
                        <span className="playlist__item-name">
                            {track.name}
                        </span>
                </li>
            )
        });
        return (
            <ul className="playlist">
                {playlist}
            </ul>
        )
    }
}

export default Playlist;