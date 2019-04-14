import React, { Component } from 'react';

class Next extends Component {
    render() {
        return (
            <button className="next" onClick = {() => this.props.handleNext()}>
                
            </button>
        )
    }
}

export default Next;