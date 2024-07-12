import React from "react";
import bruchetta from "./images/bruschetta.jpg";
import lemmondessert from "./images/lemondessert.jpg";
import salad from "./images/salad.jpg";
import pasta from "./images/intro-1684783348.webp";
import pizza from "./images/pizza.avif";

function Menu() {
  return (
    <>
      <h2 id="enjoy">Our Menu</h2>
      <div className="menu-container">
        <div className="menu-item">
          <h4>Bruchetta</h4>
          <img src={bruchetta} alt="Bruschetta" className="menu-img" />
          <p>Original italian bruschetta with ham and cheese.</p>
        </div>
        <div className="menu-item">
          <h4>Lemon Dessert</h4>
          <img src={lemmondessert} alt="Lemon Dessert" className="menu-img" />
          <p>Italian lemon cake is light, bright and citrusy from fresh lemon.</p>
        </div>
        <div className="menu-item">
          <h4>Greek Salad</h4>
          <img src={salad} alt="Greek Salad" className="menu-img" />
          <p>Just a handful of fresh ingredients and a no-fuss dressing of good olive oil and a splash of vinegar is all you need</p>
        </div>
        <div className="menu-item">
          <h4>Original Pasta</h4>
          <img src={pasta} alt="original Pasta" className="menu-img" />
          <p>Flattened bell-shaped pasta with a frilly edge on one end.</p>
        </div>
        <div className="menu-item">
          <h4>Pizza</h4>
          <img src={pizza} alt="Pizza" className="menu-img" />
          <p>The result is a soft, elastic heart with a tall, fluffy crust called the cornicione in Italian</p>
        </div>

      </div>
    </>
  );
}

export default Menu;
