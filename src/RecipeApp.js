import React, { Component } from 'react';
import Recipe from './Recipe.js';
import Navbar from './Navbar.js';
import PropTypes from 'prop-types';
import './RecipeApp.css';

class RecipeApp extends Component {
 static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "spaghetti.jpg"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "milkshake.jpg"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "avocadotost.jpg"
      }
    ]
  }
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Recipe App"
              linkList = {["New Recipe", "Home", "About", "Contact Us"]}
        />
        <div className="content">
      {this.props.recipes.map((r, index) => (<Recipe key={index}{...r}/>))}
      </div>
      </div>
    );
  }
}

export default RecipeApp;
