import React from "react";
import star from "./images/5star.png";

function CustomerSays(){
    return(
        <div>
            <h2 id="test">Testimonials</h2>
            <section className="customer">
                <div className="testimonial">
                    <div className="r1">
                        <h5>"Delicious Food, Excellent Service!"</h5>
                        <img src={star} alt="5-star rating" width={200}/>
                        <p>"Little Lemon serves incredibly delicious food with excellent service. Every dish was a delight, and the staff made our dining experience truly memorable."</p>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="r2">
                        <h5>"Fantastic Ambiance and Flavors!"</h5>
                        <img src={star} alt="5-star rating" width={200}/>
                        <p>"Little Lemon offers a fantastic ambiance and flavors that surpass expectations. The atmosphere was cozy, and each dish was expertly crafted and full of flavor."</p>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="r3">
                        <h5>"Highly Recommend!"</h5>
                        <img src={star} alt="5-star rating" width={200}/>
                        <p>"Little Lemon is a must-visit for outstanding dining. From the moment we arrived, the service was attentive, and the food was exceptional."</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomerSays;
