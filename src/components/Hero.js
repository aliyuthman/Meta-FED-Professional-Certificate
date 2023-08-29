import React from "react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="hero ">
      <article>
        <div className="article-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <button>Reserve a table</button>
        </div>
        <figure className="article-right">
          <img src={heroImage} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default Hero;
