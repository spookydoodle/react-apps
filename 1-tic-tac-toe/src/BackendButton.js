import React, { Component } from 'react';

class BackendButton extends Component {
    onClick = () => {
        console.log("Clicked.");
    }

    render() {
        return (
            <div>
                <button
                    className="backend-button"
                    onClick={this.onClick}
                >
                    {"Backend button"}
                </button>
            </div>
        )
    }
}

export default BackendButton;
