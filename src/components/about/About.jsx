import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.png";
import { motion } from "framer-motion";

const About = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>C̼S̼ B̼U̼R̼G̼E̼R̼ W̼A̼L̼A̼</h4>
          <p>
            We are CS Burger Wala. The Place for most tasty burger on entire
            galaxy.
          </p>
          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <motion.div {...options}>
              <img src={me} alt="fizan" />
              <h3>Muhammad Fizan Iqbal</h3>
            </motion.div>
            <p>
              I'm fizan Iqbal, the founder of C̼S̼ B̼U̼R̼G̼E̼R̼ W̼A̼L̼A̼. Affiliated to God
              taste....
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
