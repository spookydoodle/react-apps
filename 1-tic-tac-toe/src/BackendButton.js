import React, { Component } from 'react';
import axios from 'axios';

const BACKEND_ADDRESS = "http://localhost:8000";

class BackendButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            successfulRequests: 0,
            failedRequests: 0,
        };
    }

    onClick = () => {
        console.log("Sending a request.");

        axios.get(BACKEND_ADDRESS)
            .then(response => {
                console.log("Got a response", response);
                this.setState({ successfulRequests: this.state.successfulRequests + 1});
            }).catch(err => {
                console.log("Got an error", err);
                this.setState({ failedRequests: this.state.failedRequests + 1});
            });
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
                <div>
                    <p>{`Successes: ${this.state.successfulRequests}`}</p>
                    <p>{`Failures: ${this.state.failedRequests}`}</p>
                </div>
            </div>
        )
    }
}

export default BackendButton;
