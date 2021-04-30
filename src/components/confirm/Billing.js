import React, { useEffect } from "react";
import PropTypes from "prop-types";
import states from "../../resources/states";
const Billing = ({ getInputValue, setInputValue, setValid, appState }) => {
  // const setTheInputValue = (value) => {
  //   setInputValue(e.target)
  // }

  // useEffect(() => {
  //   console.log("checking...");
  // }, [setInputValue]);

  return (
    <section className="section--contact col-md-6" data-name="Billing">
      <div class="section--title">Billing Info</div>
      <input
        type="text"
        name="billing__company"
        placeholder="Billing Company"
        value={getInputValue("billing__company")}
        onChange={(e) => setInputValue(e.target)}
        // onLoad={()=>}
      />
      <input
        type="text"
        name="billing__address"
        placeholder="Address"
        value={getInputValue("billing__address")}
        onChange={(e) => setInputValue(e.target)}
      />

      <div className="city-state">
        <input
          className="city"
          type="text"
          name="billing__city"
          value={getInputValue("billing__city")}
          onChange={(e) => setInputValue(e.target)}
          placeholder="City"
        />
        <select name="billing__state" onChange={(e) => setInputValue(e.target)}>
          {states.map((state) => (
            <option
              name={`billing__state`}
              value={state}
              selected={getInputValue(`billing__state`) === state}
            >
              {state}
            </option>
          ))}
        </select>
        {/* <input
          className="state"
          type="text"
          name="billing__state"
          placeholder="State"
          value={getInputValue("billing__state")}
          onChange={(e) => setInputValue(e.target)}
        /> */}
        <input
          className="zip"
          type="text"
          name="billing__zip"
          placeholder="Zip"
          value={getInputValue("billing__zip")}
          onChange={(e) => setInputValue(e.target)}
        />
      </div>

      <input
        type="text"
        name="billing__contact-name"
        placeholder="Billing Name"
        value={getInputValue("billing__contact-name")}
        onChange={(e) => setInputValue(e.target)}
      />
      <input
        type="text"
        name="billing__phone"
        placeholder="Billing Phone"
        value={getInputValue("billing__phone")}
        onChange={(e) => setInputValue(e.target)}
      />
      <br />

      <input
        type="text"
        name="billing__email"
        placeholder="Email"
        value={getInputValue("billing__email")}
        onChange={(e) => setInputValue(e.target)}
      />
      <input
        type="text"
        name="poNumber"
        placeholder="PO Number (Optional)"
        value={getInputValue("poNumber")}
        onChange={(e) => setInputValue(e.target)}
      />
      <div className="col-md-12">
        <div className="order-type--label-wrap">
          <label className="order-type--label" htmlFor={`order-type__pickup`}>
            Pickup
            {/* <p class="radio-detail">details here</p> */}
            <input
              type="radio"
              checked={getInputValue("orderType") === "Pickup"}
              name="orderType"
              onClick={(e) => setInputValue(e.target)}
              id="order-type__pickup"
              value="Pickup"
            />
          </label>
          <label className="order-type--label" htmlFor={`order-type__delivery`}>
            Delivery
            {/* <p class="radio-detail">details here</p> */}
            <input
              type="radio"
              checked={getInputValue("orderType") === "Delivery"}
              name="orderType"
              onClick={(e) => setInputValue(e.target)}
              id="order-type__delivery"
              value="Delivery"
            />
          </label>
        </div>
      </div>
    </section>
  );
};

Billing.propTypes = {};

export default Billing;
