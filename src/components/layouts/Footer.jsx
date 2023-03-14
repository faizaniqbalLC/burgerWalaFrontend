import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>C̼S̼ B̼u̼r̼g̼e̼r̼ W̼a̼l̼a̼</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All rights recieved @csburgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/muhammad-fizan-iqbal/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/faizaniqbalLC">
          <AiFillGithub />
        </a>
        <a href="https://twitter.com/Muhammad_fizan_">
          <AiFillTwitterSquare />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
