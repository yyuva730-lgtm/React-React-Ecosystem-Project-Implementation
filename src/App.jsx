
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Favourites from "./pages/Favourites";

function App() {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (recipe) => {
    setFavourites((prev) => {
      if (prev.some((item) => item.idMeal === recipe.idMeal)) {
        return prev;
      }
      return [...prev, recipe];
    });
  };

  const removeFavourite = (id) => {
    setFavourites((prev) =>
      prev.filter((item) => item.idMeal !== id)
    );
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/recipes"
          element={
            <Recipes
              favourites={favourites}
              addFavourite={addFavourite}
            />
          }
        />

        <Route
          path="/recipes/:id"
          element={
            <RecipeDetail
              favourites={favourites}
              addFavourite={addFavourite}
            />
          }
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              removeFavourite={removeFavourite}
            />
          }
        />

        <Route path="*" element={<h2 className="not-found">Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
