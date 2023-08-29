import React from "react";
import greekSalad from "../assets/greek-salad.jpg";

import bruchetta from "../assets/bruchetta.svg";

import lemonDessert from "../assets/lemon-dessert.jpg";
import bike from "../assets/bike.svg";

const cardDetails = [
  {
    imgUrl: greekSalad,
    title: "Greek Salad",
    price: "$12.99",
    paragraph:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },

  {
    imgUrl: bruchetta,
    title: "Bruschetta",
    price: "$5.99",
    paragraph:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },

  {
    imgUrl: lemonDessert,
    title: "Lemon Dessert",
    price: "$5.00",
    paragraph:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Highlights = () => {
  return (
    <section className="highlight">
      <article className="card-container">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
        <div className="cards">
          {cardDetails.map((highlight) => (
            <figure key={highlight.imgUrl}>
              <img src={highlight.imgUrl} alt="" />
              <figcaption>
                <h2>
                  {highlight.title} <span>{highlight.price}</span>
                </h2>
                <p className="main-p">{highlight.paragraph}</p>

                <p className="base-p">
                  Order a delivery
                  <span className="bike">
                    <img src={bike} alt="" />
                  </span>
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Highlights;
