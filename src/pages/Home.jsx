
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <span className="hero-tag">🍃 Fresh Ideas for Every Meal</span>

        <h1>
          Discover Your Next
          <span> Favourite Recipe</span>
        </h1>

        <p>
          Explore delicious recipes from around the world.
          Find your favourite meals and start cooking today!
        </p>

        <Link to="/recipes" className="primary-btn">
          Explore Recipes →
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
          alt="Delicious recipe"
        />
      </div>
    </main>
  );
}

export default Home;