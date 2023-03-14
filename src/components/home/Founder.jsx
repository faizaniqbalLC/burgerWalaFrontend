import React from "react";
import { motion } from "framer-motion";
import fn from "../../assets/founder.png";
const Founder = () => {
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
    <section className="founder">
      <motion.div {...options}>
        <img src={fn} alt="founder" height={200} width={200} />
        <h3>Muhammad Fizan Iqbal</h3>
        <p>
          Hey Everyone, I'm Fizan, the founder of CS Burger Wala.
          <br />
          Our aim is to create most tasty burger on planet.{" "}
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
