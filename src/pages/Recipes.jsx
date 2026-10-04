
import { useState } from "react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "../components/RecipeCard";

function Recipes({ favourites, addFavourite }) {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  const { data, loading, error } = useRecipes(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput.trim());
  };

  const isFavourite = (id) =>
    favourites.some((item) => item.idMeal === id);

  return (
    <main className="page-container">
      <div className="page-heading">
        <h1>Explore Recipes 🍽️</h1>
        <p>Search for your favourite food and discover new dishes.</p>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search recipes... (e.g. Chicken)"
          required
        />

        <button type="submit" className="primary-btn">
          Search
        </button>
      </form>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading recipes...</p>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && query && data.length === 0 && (
        <p className="empty-message">
          No recipes found. Try another search.
        </p>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="recipe-grid">
          {data.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              isFavourite={isFavourite(recipe.idMeal)}
              addFavourite={addFavourite}
              removeFavourite={() => {}}
            />
          ))}
        </div>
      )}

      {!query && (
        <p className="empty-message">
          Enter a recipe name above to get started.
        </p>
      )}
    </main>
  );
}

export default Recipes;