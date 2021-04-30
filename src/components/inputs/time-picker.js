import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../AppContext";

const t1 = [
  "8:00AM",
  "8:30AM",
  "9:00AM",
  "9:30AM",
  "10:00AM",
  "10:30AM",
  "11:00AM",
  "11:30AM",
  "12:00PM",
  "12:30PM",
  "1:00PM",
  "1:30PM",
  "2:00PM",
  "2:30PM",
  "3:00PM",
  "3:30PM",
  "4:00PM",
  "4:30PM",
];

const t2 = [
  "9:00AM",
  "9:30AM",
  "10:00AM",
  "10:30AM",
  "11:00AM",
  "11:30AM",
  "12:00PM",
  "12:30PM",
  "1:00PM",
  "1:30PM",
  "2:00PM",
  "2:30PM",
  "3:00PM",
  "3:30PM",
  "4:00PM",
  "4:30PM",
  "5:00PM",
  "5:30PM",
  "6:00PM",
];

export const TimeFrom = (props) => {
  const {
    setInputValue,
    getInputValue,
    setGeneratorSame,
    setValid,
    appState: { inputs, generatorSame, sections },
  } = useContext(AppContext);

  useEffect(() => {
    // setInputValue({ name: "time-from", value: "08:00AM" });
  }, []);
  return (
    <>
      <label className="label-time" for="time-from">
        Hours
      </label>
      <select
        className="time-select"
        id="time-from"
        name="time-from"
        defaultValue={"9:00AM"}
        onChange={(e) => {
          // console.log(e.target.name);
          setInputValue(e.target);
        }}
      >
        {t1.map((t) => (
          <option key={`time-from--${t}`} value={t}>
            {t}
          </option>
        ))}
      </select>
    </>
  );
};

export const TimeTo = (props) => {
  const {
    setInputValue,
    getInputValue,

    appState: { inputs, generatorSame, sections },
  } = useContext(AppContext);

  useEffect(() => {
    // setInputValue({ name: "time-to", value: "5:00PM" });
  }, []);
  return (
    <>
      <label className="label-time" for="time-to">
        To{" "}
      </label>
      <select
        className="time-select"
        id="time-to"
        name="time-to"
        defaultValue={"5:00PM"}
        onChange={(e) => {
          // console.log(e.target.name);
          setInputValue(e.target);
        }}
      >
        {t2.map((t) => (
          <option key={`time-to--${t}`} value={t}>
            {t}
          </option>
        ))}
      </select>
    </>
  );
};
