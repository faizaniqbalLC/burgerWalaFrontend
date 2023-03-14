import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
const Home = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>C̼S̼ B̼u̼r̼g̼e̼r̼ W̼a̼l̼a̼</motion.h1>
          <motion.p {...options} transition={{ delay: 0.2 }}>
            Purchase a yummy and tasty burger here.
          </motion.p>
        </div>
        <motion.a
          href="#menu"
          initial={{
            opacity: 0,
            y: "-100%",
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          Explore Menu
        </motion.a>
      </section>
      <Founder />
      <Menu />
    </>
  );
};

export default Home;
