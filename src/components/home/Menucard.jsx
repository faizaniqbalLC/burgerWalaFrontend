import { motion } from "framer-motion";
import React from "react";

const Menucard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <motion.div
      className="menucard"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: delay }}>
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt="itemNum" />
        <h5>Rs {price}</h5>
        <p>{title}</p>
        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default Menucard;
