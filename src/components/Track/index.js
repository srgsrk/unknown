import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div className="track">
                <div className="track__name">
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default Index;