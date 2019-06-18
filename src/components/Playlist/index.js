import React from 'react';
import './playlist.scss'

export default function Index({mediaLibrary, current, selectTrack}) {
    const playlist = mediaLibrary.map((track, index) =>
        <li
            className={index === current ? "playlist__item active" : "playlist__item"}
            key={track.name}
            onClick={() => selectTrack(index)}
        >
            <span className="playlist__item-name">
                {track.name}
            </span>
        </li>
    );
    return (
        <ul className="playlist">
            {playlist}
        </ul>
    )
}