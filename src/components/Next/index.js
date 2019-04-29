import React, { Component } from 'react';

class Next extends Component {
    render() {
        return (
            <button
                className="next"
                onClick = {() => this.props.handleNext()}
                title="Next"
            >
                <i className="fas fa-forward"></i>
            </button>
        )
    }
}

export default Next;