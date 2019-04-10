import React, { Component } from 'react';

class Track extends Component {
    render() {
        return (
            <audio className="track"
                src={this.props.src}
            >
                Ваш браузер не поддерживает <code>audio</code> элемент.
            </audio>
        )
    }
}

export default Track;