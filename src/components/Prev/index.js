import React, { Component } from 'react';

class Prev extends Component {
    render() {
        return (
            <button
                className="prev"
                onClick = {() => this.props.handlePrev()}
                title = "Previous"
            >
                
            </button>
        )
    }
}

export default Prev;