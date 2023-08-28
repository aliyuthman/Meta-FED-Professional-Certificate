import React from "react";
import "./Highlights.css";
import Card from "./Card";

const cardDetails = {
  imgUrl: [],
  title: [],
  price: [],
  paragraph: [],
  city: [],
};
const Highlights = () => {
  return (
    <section className="highlight">
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Highlights;
