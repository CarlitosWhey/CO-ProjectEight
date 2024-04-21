import React, { useState } from 'react';

const RecipeForm = ({ onRecipeSubmit }) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      recipeName: recipeName,
      ingredients: ingredients.split(/[,|-]/).map(item => item.trim()).filter(Boolean),
      instructions: instructions.split(/[,|-]/).map(item => item.trim()).filter(Boolean),
      imageUrl: imageUrl
    };

    onRecipeSubmit(newRecipe);
    setRecipeName('');
    setIngredients('');
    setInstructions('');
    setImageUrl('');
  };

  return (
    <div className="form-container">
    <h1>Share Your Recipe!</h1>
    <br />
    <form onSubmit={handleSubmit} id="recipe-form">
      <div>
        <input
          type="text"
          id="recipeName"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          id="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          id="instructions"
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="url"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default RecipeForm;