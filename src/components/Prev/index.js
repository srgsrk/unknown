import React, { Component } from 'react';

class Prev extends Component {
    render() {
        return (
            <button
                className="prev"
                onClick = {() => this.props.handlePrev()}
                title = "Previous"
            >
                <i className="fas fa-backward"></i>
            </button>
        )
    }
}

export default Prev;