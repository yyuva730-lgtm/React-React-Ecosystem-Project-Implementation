
import RecipeCard from "../components/RecipeCard";

function Favourites({ favourites, removeFavourite }) {
  return (
    <main className="page-container">
      <div className="page-heading">
        <h1>My Favourites ❤️</h1>
        <p>Your saved recipes in one place.</p>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-favourites">
          <span>♡</span>
          <h2>No Favourites Yet</h2>
          <p>Explore recipes and save your favourite meals here.</p>
        </div>
      ) : (
        <div className="recipe-grid">
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              isFavourite={true}
              addFavourite={() => {}}
              removeFavourite={removeFavourite}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favourites;