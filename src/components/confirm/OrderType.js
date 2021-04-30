import React from "react";
import PropTypes from "prop-types";
import LocationPicker from "./LocationPicker";

const OrderType = ({ getInputValue, setInputValue }) => {
  return (
    <section class="section--containers col-md-12" data-name="containers">
      <div class="section--title">Order Info</div>
      <div class="container-fluid">
        <div class="row ">
          <div class="col-md-12 px-0">
            <center>
              <h4>Pick a Cleanlites Location</h4>
            </center>
            <LocationPicker />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderType;
