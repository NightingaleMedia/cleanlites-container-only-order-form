import React from "react";
import PropTypes from "prop-types";
import "./loading.css";

const LoadingNode = (props) => {
  return (
    <div className="progress-nodes">
      <div className="loading__progress-nodes--completed"></div>
      <ul>
        <li>
          <div></div>
          <a href="#"></a>
        </li>
        <li>
          <div></div>
          <a href="#"></a>
        </li>
        <li>
          <div></div>
          <a href="#"></a>
        </li>
        <li data-node-name="Materials">
          <div></div>
          <a href="#"></a>
        </li>
        <ul className="sub-item--ul"></ul>
        <li>
          <div></div>
          <a href="#"></a>
        </li>
        <li>
          <div></div>
          <a href="#">
            <center></center>
          </a>
        </li>
      </ul>
    </div>
  );
};

LoadingNode.propTypes = {};

export default LoadingNode;
