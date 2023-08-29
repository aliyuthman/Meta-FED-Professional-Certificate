import React from "react";
import chef from "../assets/chef.png";

const About = () => {
  return (
    <section className="about">
      <article>
        <div className="article-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            "Little Lemon" is a cherished family-owned Mediterranean restaurant
            located in the heart of [City Name]. Our culinary journey combines
            traditional Mediterranean recipes with a modern twist, creating a
            unique dining experience that captures the essence of both the past
            and present. Our dishes are carefully crafted by skilled chefs who
            blend classic flavors with innovative techniques, resulting in a
            symphony of tastes that delight the senses. The restaurant's
            inviting ambiance, reminiscent of Mediterranean villages, sets the
            stage for unforgettable moments shared with loved ones. Our curated
            wine collection perfectly complements the cuisine, enhancing the overall dining experience.
          </p>
        </div>
        <figure className="article-right">
          <img src={chef} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default About;
