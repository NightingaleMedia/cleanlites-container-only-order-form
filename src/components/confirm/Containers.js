import React from "react";
import PropTypes from "prop-types";

const Containers = ({ getInputValue, setInputValue }) => {
  return (
    <section class="section--containers" data-name="containers">
      <div class="section--title">Containers</div>

      <div class="row container--content">
        <div class="col-md-6 col-sm-6 px-0">
          <label>4ft Boxes</label>
          <input
            type="text"
            name="containers__4ftBox"
            value={getInputValue("containers__4ftBox")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
          <label>8ft Boxes</label>
          <input
            type="text"
            name="containers__8ftBox"
            value={getInputValue("containers__8ftBox")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
          <label>U-bend Boxes</label>
          <input
            type="text"
            name="containers__uBendBox"
            value={getInputValue("containers__uBendBox")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
          <label>Cubic Yard Box</label>
          <input
            type="text"
            name="containers__gaylords"
            value={getInputValue("containers__gaylords")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
          <label>Small Batt Box</label>
          <input
            type="text"
            name="containers__smallBatteryBox"
            value={getInputValue("containers__smallBatteryBox")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
        </div>
        <div class="col-md-6 col-sm-6 px-0">
          <label>55 Gallon Drum</label>
          <input
            type="text"
            name="containers__55GallonDrums"
            value={getInputValue("containers__55GallonDrums")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
          <label>Poly Drums</label>
          <input
            type="text"
            name="containers__polyDrums"
            value={getInputValue("containers__polyDrums")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
          <label>5 Gallon Pail</label>
          <input
            type="text"
            name="containers__5GallonPail"
            value={getInputValue("containers__5GallonPail")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
          <label>Other 1</label>
          <input
            type="text"
            name="containers__other1"
            value={getInputValue("containers__other1")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
          <label>Other 2</label>
          <input
            type="text"
            name="containers__other2"
            value={getInputValue("containers__other2")}
            onChange={(e) => setInputValue(e.target)}
            placeholder="Qty Needed"
          />
        </div>
        <div class="col-md-6 col-sm-6 px-0"></div>

        <div class="col-md-6 col-sm-6 px-0"></div>
      </div>
    </section>
  );
};

Containers.propTypes = {};

export default Containers;
