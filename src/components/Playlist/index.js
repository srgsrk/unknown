import React from 'react';
import './playlist.scss'

export default function Index(props) {
    const playlist = props.mediaLibrary.map((track, index) =>
        <li
            className={index === props.current ? "playlist__item active" : "playlist__item"}
            key={track.name}
        >
            <span className="playlist__item-name">
                {track.name}
            </span>
        </li>
    )
    return (
        <ul className="playlist">
            {playlist}
        </ul>
    )
}