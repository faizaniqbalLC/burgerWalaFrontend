import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section className="contact">
      <motion.form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea cols="30" rows="10" placeholder="Message" />
        <button type="submit">Send</button>
      </motion.form>
      <motion.div className="formBorder">
        <motion.div></motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
