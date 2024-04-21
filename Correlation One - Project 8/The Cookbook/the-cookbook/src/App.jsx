import { useState } from "react";
import RecipeForm from './RecipeForm.jsx';
import Nav from './Nav.jsx';
import LeftPanel from './LeftPanel.jsx';
import PreSubmittedRecipes from './PreSubmittedRecipes.jsx';
import RightPanel from './RightPanel.jsx';
import "./App.css";



function App() {
  const [recipes, setRecipes] = useState([]);

  const handleRecipeSubmit = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  function RecipeCards() {
    const [likes, setLikes] = useState(Array(recipes.length).fill(0));

    // Function to handle like button click
    const handleLike = (index) => {
      const newLikes = [...likes];
      newLikes[index] += 1;
      setLikes(newLikes);
    };
    return (
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <div className="post-top">
              <h2>{recipe.recipeName}</h2>
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
            <div className="post-content">
              <img src={recipe.imageUrl} alt={recipe.recipeName} />
              <div>
                <br />
                <h3>Ingredients:</h3>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <br />
                <h3>Instructions:</h3>
                <ol>
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="post-bottom">
              <div className="action" onClick={() => handleLike(index)}>
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                <span>{likes[index]} Like(s)</span>
              </div>
              <div className="action">
                <i class="fa fa-comment-o" aria-hidden="true"></i>
                <span>Comment</span>
              </div>
              <div className="action">
                <i class="fa fa-share" aria-hidden="true"></i>
                <span>Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="container">
        <LeftPanel />
        <div className="center-panel">
          <div className="recipe-form">
            <RecipeForm onRecipeSubmit={handleRecipeSubmit} />
          </div>
          <RecipeCards />
          <div className="presubmitted-recipes">
            <PreSubmittedRecipes />
          </div>
        </div>
        <RightPanel />
      </div>
    </>
  );
}

export default App;