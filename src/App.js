import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./assets/SCSS/App.scss";

import { Footer, Home, Account, Categories, CategoriesDetiled, Restaurants, Add } from "./Components";

function App() {
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/api/restaurants")
      .then(res => {
        setRestaurants(res.data);
      })
      .catch(err => {
        console.log(err);
      });

      axios
      .get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if ((categories.length !== 0) & (restaurants.length !== 0)) {
      setLoading(false);
    }
  }, [restaurants, categories, products]);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => (
          <Home
            {...props}
            categories={categories}
            restaurants={restaurants}
            loading={loading}
          />
        )}
      />

      <Route
        exact
        path="/home"
        render={props => (
          <Home
            {...props}
            categories={categories}
            restaurants={restaurants}
            loading={loading}
          />
        )}
      />

      <Route
        exact
        path="/categories"
        render={props => (
          <Categories
            {...props}
            categories={categories}
            restaurants={restaurants}
            loading={loading}
          />
        )}
      />

      <Route
        exact
        path="/categories/:id"
        render={props => (
          <CategoriesDetiled 
            {...props}
            categories={categories}
            restaurants={restaurants}
            loading={loading}
          />
        )}
      />

      <Route
        exact
        path="/restaurants/:id"
        render={props => (
          <Restaurants 
            {...props}
            categories={categories}
            restaurants={restaurants}
            products={products}
            loading={loading}
          />
        )}
      />
      
      <Route
        exact
        path="/add"
        render={props => (
          <Add
            {...props}
            categories={categories}
            restaurants={restaurants}
            products={products}
            loading={loading}
          />
        )}
      />


      <Route exact path="/account" component={Account} />

      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
