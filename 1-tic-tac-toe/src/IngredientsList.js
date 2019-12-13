import React, { Component } from 'react';
import './Recipe.css';
// import PropTypes from 'prop-types';

class Recipe extends Component {

    static defaultProps = {      // use static inside class or another method on the bottom
        // ingredients: []
        ingredients: ['default ingredient', "another one "]
    }

    // // If you don't want to specify default props - will only work in dev, not production
    // // not working though...
    // static propTypes = {
    //     ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
    // }

    render() {
        return (
            <div> {/* can return only on JSX */}

                <h4 className="name">Ingredients from defaultProps</h4>
                <ul>
                    {this.props.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                </ul>
            </div>
        )
    }
}

// Recipe.defaultProps = {
//     ingredients: []
// }

// Export
export default Recipe;