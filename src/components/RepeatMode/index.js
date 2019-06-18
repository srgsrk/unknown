import React, { Component } from 'react';

class RepeatMode extends Component {
    render() {
        const {repeatMode} = this.props;
        let title;
        switch (repeatMode) {
            case 'off':
                title = 'Повтор выключен';
                break;
            case 'repeat-track':
                title = 'Повтор трека включен';
                break;
            case 'repeat-list':
                title = 'Повтор плейлиста включен';
                break;
            default:
                title = 'Поменять режим повтора';

        }
        return (
            <button
                className={"repeat-mode " + (repeatMode === 'off' ? '' : 'active')}
                onClick = {() => this.props.handleRepeatMode()}
                title={title}
            >
                {repeatMode === 'repeat-track' ? '' : ''}
            </button>
        )
    }
}

export default RepeatMode;