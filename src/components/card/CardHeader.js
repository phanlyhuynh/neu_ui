import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const CardHeader = ({ children }) => (
  <header className="card__header">{children}</header>
);

CardHeader.propTypes = {
  /**
   * Pass children to input text into the CardHeader.
   */
  children: PropTypes.string.isRequired,
};

export default CardHeader;