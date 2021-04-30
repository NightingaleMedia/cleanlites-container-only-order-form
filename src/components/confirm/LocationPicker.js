import React, { useContext } from "react";

import { AppContext } from "../../AppContext";

const LocationPicker = ({ checkValid }) => {
  const {
    setInputValue,
    getInputValue,
    appState: { inputs },
  } = useContext(AppContext);

  return (
    <div className={`location-picker__wrap`}>
      {inputs.CleanlitesFacility.choices.map((facility) => (
        <div
          key={`cri-location-picker--${facility.value}`}
          className="form-button1 location-selector"
        >
          <input
            checked={getInputValue("CleanlitesFacility") == facility.value}
            type="radio"
            readOnly
            className="auto-next"
            id={`location-label--${facility.text}`}
            name="CleanlitesFacility"
            // onSelect={(e) => setInputValue(e.target)}
            value={facility.value}
          />

          <label
            htmlFor={`location-label--${facility.text}`}
            onClick={(e) => {
              setInputValue({
                name: "CleanlitesFacility",
                value: facility.value,
              });
            }}
          >
            <h4>{facility.text}</h4>
          </label>
        </div>
      ))}
    </div>
  );
};

export default LocationPicker;
