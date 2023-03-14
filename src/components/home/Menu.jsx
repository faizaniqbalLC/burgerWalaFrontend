import React from "react";
import Menucard from "./Menucard";
import bur1 from "../../assets/burger1.png";
import bur2 from "../../assets/burger2.png";
import bur3 from "../../assets/burger3.png";
const Menu = () => {
  const addToCartHandler = () => {};
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <Menucard
          itemNum={1}
          burgerSrc={bur1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <Menucard
          itemNum={2}
          burgerSrc={bur2}
          price={300}
          title="Double Patty Burger"
          handler={addToCartHandler}
          delay={0.5}
        />
        <Menucard
          itemNum={3}
          burgerSrc={bur3}
          price={400}
          title="Burger With Fries"
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
