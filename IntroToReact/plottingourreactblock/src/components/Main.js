import React, { Component } from 'react';
class Main extends Component {
    state = {}
    render() {
        return (

            <div className="Main">{this.props.children}</div>


        );
    }
}

export default Main;
