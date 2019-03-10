import React, { Component } from 'react';
import Recipe from './Recipe.js';
import Navbar from './Navbar.js';
import RecipeInput from './RecipeInput';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
      {
        id: 0,
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "spaghetti.jpg"
      },
      {
        id: 1,
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "milkshake.jpg"
      },
      {
        id: 2,
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "avocadotost.jpg"
      }
    ],
    nextRecipeId: 3,
    showForm: false
    };
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    
  }
  
  handleSave(recipe){
  this.setState((prevState, props)=> {
    const newRecipe = {...recipe, id:this.state.nextRecipeId};
    return {
      nextRecipeId: prevState.nextRecipeId + 1,
      showForm: false,
      recipes: [...this.state.recipes, newRecipe]
    };
  });
  }
  
  onDelete(id) {
   const recipes = this.state.recipes.filter(el => id !== el.id);
   this.setState({recipes});
  }
  
  render() {
    const showForm = this.state.showForm;
    return (
      <div className="App">
        <Navbar title="Recipe App"
                onNewRecipe = {()=>{this.setState({showForm: true})}}
        />
        {showForm ? <RecipeInput onClose={() => {this.setState({showForm: false})}} onSave={this.handleSave}/> : null}
        <div className="content">
      {this.state.recipes.map((r, index) => (<Recipe onDelete={this.onDelete} key={r.id}{...r}/>))}
      </div>
      </div>
    );
  }
}

export default RecipeApp;
