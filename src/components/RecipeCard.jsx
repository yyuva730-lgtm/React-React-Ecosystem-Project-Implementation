
import { Link } from "react-router-dom";

function RecipeCard({
  recipe,
  isFavourite,
  addFavourite,
  removeFavourite
}) {
  return (
    <div className="recipe-card">
      <Link
        to={`/recipes/${recipe.idMeal}`}
        className="recipe-image-link"
      >
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="recipe-image"
        />
      </Link>

      <div className="recipe-info">
        <h3>{recipe.strMeal}</h3>
        <p>{recipe.strCategory || "Recipe"}</p>

        <div className="card-actions">
          <Link
            to={`/recipes/${recipe.idMeal}`}
            className="details-btn"
          >
            View Recipe
          </Link>

          <button
            className={isFavourite ? "saved-btn" : "favourite-btn"}
            onClick={() =>
              isFavourite
                ? removeFavourite(recipe.idMeal)
                : addFavourite(recipe)
            }
          >
            {isFavourite ? "♥ Saved" : "♡ Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;