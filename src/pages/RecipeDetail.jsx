
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetail({ favourites, addFavourite }) {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const meal = response.data.meals?.[0];

        if (meal) {
          setRecipe(meal);
        } else {
          setError("Recipe not found.");
        }
      } catch (err) {
        setError("Unable to load recipe details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return <div className="loading"><div className="spinner"></div><p>Loading recipe...</p></div>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!recipe) return null;

  const isFavourite = favourites.some(
    (item) => item.idMeal === recipe.idMeal
  );

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const number = index + 1;
    const ingredient = recipe[`strIngredient${number}`];
    const measure = recipe[`strMeasure${number}`];

    return ingredient?.trim()
      ? `${measure || ""} ${ingredient}`.trim()
      : null;
  }).filter(Boolean);

  return (
    <main className="detail-container">
      <div className="detail-card">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="detail-image"
        />

        <div className="detail-content">
          <span className="category-tag">
            {recipe.strCategory}
          </span>

          <h1>{recipe.strMeal}</h1>
          <p>Area: {recipe.strArea || "Not available"}</p>

          <button
            className={isFavourite ? "saved-btn" : "favourite-btn"}
            onClick={() => {
              if (!isFavourite) addFavourite(recipe);
            }}
            disabled={isFavourite}
          >
            {isFavourite ? "♥ Saved to Favourites" : "♡ Save to Favourites"}
          </button>

          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Instructions</h2>
          <p className="instructions">
            {recipe.strInstructions}
          </p>

          {recipe.strYoutube && (
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Watch on YouTube
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

export default RecipeDetail;