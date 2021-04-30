import React from "react";
import PropTypes from "prop-types";
import LoadingDiv from "./LoadingDiv";

const LoadingPane = (props) => {
  return (
    <div className="form-values">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <LoadingDiv />
            <LoadingDiv delay={"100ms"} />
            <LoadingDiv delay={"200ms"} />
            <LoadingDiv delay={"300ms"} />
            <LoadingDiv delay={"400ms"} />
          </div>
        </div>
      </div>
    </div>
  );
};

LoadingPane.propTypes = {};

export default LoadingPane;
