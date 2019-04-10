import React, { Component } from 'react';
import Track from "./Track";

class Playlist extends Component {
    render() {
        return (
            <div className="playlist">
                <Track
                    src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
                />
            </div>
        )
    }
}

export default Playlist;