import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import states from "../../resources/states";

const Generator = ({ getInputValue, setInputValue }) => {
  const { setGeneratorSame, appState } = useContext(AppContext);
  return (
    <section className="section--generator col-md-6" data-name="Generator">
      <div class="section--title">Generator Info</div>
      <input
        className="big-button-input"
        type="checkbox"
        name="no-containers"
        id="no-containers"
        checked={appState.generatorSame}
        readOnly
      />
      <div className="big-button">
        <label onClick={setGeneratorSame} htmlFor="no-containers">
          <i className="fas fa-hand-pointer"></i> Generator Is the Same as
          Billing
        </label>
      </div>

      <input
        type="text"
        name="generator__company"
        placeholder="Generator"
        value={getInputValue("generator__company")}
        onChange={(e) => setInputValue(e.target)}
      />
      <input
        type="text"
        name="generator__address"
        placeholder="Address"
        value={getInputValue("generator__address")}
        onChange={(e) => setInputValue(e.target)}
      />

      <div className="city-state">
        <input
          className="city"
          type="text"
          name="generator__city"
          placeholder="City"
          value={getInputValue("generator__city")}
          onChange={(e) => setInputValue(e.target)}
        />
        <select
          name="generator__state"
          onChange={(e) => setInputValue(e.target)}
        >
          {states.map((state) => (
            <option
              name={`generator__state`}
              value={state}
              selected={getInputValue(`generator__state`) === state}
            >
              {state}
            </option>
          ))}
        </select>
        <input
          className="zip"
          type="text"
          name="generator__zip"
          placeholder="Zip"
          value={getInputValue("generator__zip")}
          onChange={(e) => setInputValue(e.target)}
        />
      </div>
      <input
        type="text"
        name="generator__contact-name"
        placeholder="Contact Name"
        value={getInputValue("generator__contact-name")}
        onChange={(e) => setInputValue(e.target)}
      />
      <input
        type="text"
        name="generator__phone"
        placeholder="Phone"
        value={getInputValue("generator__phone")}
        onChange={(e) => setInputValue(e.target)}
      />
      {/* <input
        type="text"
        name="poNumber"
        placeholder="PO Number"
        value={getInputValue("poNumber")}
      /> */}
    </section>
  );
};

Generator.propTypes = {};

export default Generator;
