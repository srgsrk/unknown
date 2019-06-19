import React, { Component } from 'react';
import './cover.scss';

class Index extends Component {
    render() {
        return (
            <div className="cover__wrap">
                <img className="cover" src={"https://via.placeholder.com/450/808080/fff?text=" + this.props.text } alt="" />
            </div>
        )
    }
}

export default Index;