import React, { Component } from 'react';

class RepeatMode extends Component {
    render() {
        const {repeatMode} = this.props;
        let title;
        switch (repeatMode) {
            case 'off':
                title = 'Повтор воспроизведения выключен';
                break;
            case 'repeat-track':
                title = 'Повтор воспроизведения трека включен';
                break;
            case 'repeat-list':
                title = 'Повтор воспроизведения плейлиста включен';
                break;
            default:
                title = 'Поменять режим повтора';

        }
        return (
            // TODO: Добавить смену title
            <button
                className={"repeat-mode " + (this.props.repeatMode === 'off' ? '' : 'active')}
                onClick = {() => this.props.handleRepeatMode()}
                title={title}
            >
                {this.props.repeatMode === 'repeat-track' ? <i className="fas fa-redo-alt"></i> : <i className="fas fa-redo-alt"></i>}
            </button>
        )
    }
}

export default RepeatMode;