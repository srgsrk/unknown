import React, { Component } from 'react';

class RepeatMode extends Component {
    render() {
        return (
            // TODO: Добавить смену title
            <button
                className={"repeat-mode " + (this.props.repeatMode === 'off' ? '' : 'active')}
                onClick = {() => this.props.handleRepeatMode()}
                title="repeat mode"
            >
                {this.props.repeatMode === 'repeat-track' ? <i className="fas fa-redo-alt"></i> : <i className="fas fa-redo-alt"></i>}
            </button>
        )
    }
}

export default RepeatMode;