import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const MaterialInput = (props) => {
  return <div></div>;
};

export const OtherInput = ({ dName, name, placeholder }) => {
  const {
    setInputValue,
    appState: { inputs },
  } = useContext(AppContext);
  return (
    <React.Fragment>
      <div class="label-input-quantity other">
        <label class="bold-label">
          <span>{dName}</span>
        </label>
        <div className="input-wrapper">
          <input
            className="align-items-end withLabel"
            key={`value-input--${name}`}
            type="text"
            placeholder={placeholder ? placeholder : "Est Quantity"}
            // placeholder={name}
            name={name}
            value={inputs[name].value}
            onChange={(e) => setInputValue(e.target)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export const ControlledMaterialInput = ({
  dName,
  verify,
  placeholder,
  name,
}) => {
  const {
    setInputValue,
    setInputUnit,
    appState: { inputs },
  } = useContext(AppContext);

  const [selectedUnit, changeSelectedUnit] = useState("Units");

  useEffect(() => {
    setInputUnit(name, selectedUnit);
  }, [selectedUnit]);

  const handleControlledValue = (target) => {
    if (target.value.match(/^[0-9]*$/)) {
      setInputValue(target);
      return;
    } else {
      toast.error(
        "Please use only numbers, select your weight or units to the right"
      );
    }
  };
  return (
    <React.Fragment>
      <div class="label-input-quantity">
        <label class="bold-label">
          <span>{dName}</span>
        </label>
        <div className="input-wrapper">
          <input
            className="align-items-end withLabel"
            key={`value-input--${name}`}
            type="text"
            placeholder={placeholder ? placeholder : "Est Quantity"}
            name={name}
            value={`${inputs[name].value}`}
            onChange={(e) => handleControlledValue(e.target)}
          />
          {verify ? <div className="verify"></div> : ""}
        </div>
        <div class="units--holder">
          <input
            type="checkbox"
            key={`unit-input--${name}`}
            id={`units--${name}`}
            name={`unit-type--${name}`}
            value={selectedUnit}
            checked={selectedUnit === "Lbs"}
          />

          <label
            onClick={() => {
              if (selectedUnit === "Units") {
                changeSelectedUnit("Lbs");
              } else {
                changeSelectedUnit("Units");
              }
            }}
            for="units--batteries_niCad"
          >
            {selectedUnit}
          </label>
          <span></span>
        </div>
      </div>
    </React.Fragment>
  );
};

MaterialInput.propTypes = {};
