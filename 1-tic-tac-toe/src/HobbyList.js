import React, {Component} from 'react';

// class Pet extends React.Component { // because of import React...
class HobbyList extends React.Component {
    render() {
        const hobbies = ["Sleeping 2", "Eating 2", "2 Hiding in boxes"];
        return (
            <ul>
                {hobbies.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
        )
    }
}


// Export
export default HobbyList;