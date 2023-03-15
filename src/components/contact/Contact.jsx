import React from "react";
import { motion } from "framer-motion";
import bur from "../../assets/burger2.png";
const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea cols="30" rows="10" placeholder="Message" />
        <button type="submit">Send</button>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}>
        <motion.div
          initial={{ y: "-100vh", opacity: 0, x: "50%" }}
          animate={{ y: "-50%", opacity: 1, x: "50%" }}
          transition={{ delay: 1 }}>
          <img src={bur} alt="burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
