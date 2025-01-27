import React from "react";
import salad from "./images/salad.jpg"
import lemon from "./images/lemondessert.jpg"
// import brus from "./images/bruschetta.jpg"
import { useNavigate } from "react-router-dom";


function Specials() {
    const specials = [{ title: "Greek Salad", description: "The Greek salad, a staple of Greek cuisine, typically comprises tomatoes, cucumbers, onions, feta cheese, and olives, seasoned with salt, Greek oregano, lemon juice, and olive oil", img: salad },
    // { title: "Bruschetta", description: "Bruschetta, an Italian antipasto, features grilled bread typically drizzled with olive oil and seasoned with salt, often accompanied by toppings such as tomatoes, vegetables, beans, cured meats, and cheese.", img: brus },
    { title: "Lemon Cake", description: "Crafted with the zing of sour lemons and the richness of thick cream, this sweet and savory dessert promises to tantalize your taste buds, leaving you eager for every indulgent bite", img: lemon }
    ]

    const navigate = useNavigate();

    const Submit = ( e ) => {
        e.preventDefault()
        navigate( '/menu' )
    }

    return (
        <section className="specials">
            <div className="top">
                <h2>This week's Specials!</h2>
                <button id="menu" onClick={Submit}>Contact Us</button>
            </div>
            <div className="specials-list">
                {specials.map( ( special, index ) => (
                    <div key={index} className="special">
                        <h3>{special.title}</h3>
                        <img src={special.img} alt="img" />
                        <p>{special.description}</p>
                    </div>
                ) )}
            </div>
        </section>
    )
}

export default Specials;