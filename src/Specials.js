import React from "react";
import salad from "./images/salad.jpg"
import lemon from "./images/lemondessert.jpg"
import brus from "./images/bruschetta.jpg"
import { useNavigate } from "react-router-dom";


function Specials(){
    const specials = [{title: "Greek Salad", description: "Greek salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, lemon juice and olive oil.", img:salad},
                        {title: "Bruschetta", description: "Bruschetta is an Italian antipasto consisting of grilled bread often topped with olive oil and salt. Most commonly it is served with toppings of tomato, vegetables, beans, cured meat, and/or cheese.", img:brus},
                        {title: "Lemon Cake", description: "This comes straight from my grandma's cookbook. Made from sour lemons and the thickest cream, this sweet and savoury dessert will have you craving for more", img:lemon}
    ]

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault()
        navigate('/menu')
    }

    return( 
        <section className="specials">
            <div className="top">
                <h2>This week's Specials!</h2>
                <button id="menu" onClick={Submit}>Our Menu</button>
            </div>
            <div className="specials-list">
                {specials.map((special, index) => (
                    <div key={index} className="special">
                        <h3>{special.title}</h3>
                        <img src={special.img} alt="img"/>
                        <p>{special.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Specials;