import React from "react";
import PropTypes from "prop-types";
import "./loading.css";
const LoadingDiv = ({ delay }) => {
  return <div className="loading__div" style={{ animationDelay: delay }}></div>;
};

LoadingDiv.propTypes = {};

export default LoadingDiv;
