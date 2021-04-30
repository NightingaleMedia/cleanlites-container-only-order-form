import React, { useContext } from "react";

import "./style-rendered.css";
import Billing from "./Billing";
import Generator from "./Generator";

import Containers from "./Containers";

import { AppContext } from "../../AppContext";
import OrderType from "./OrderType";
const ConfirmForm = (props) => {
  const {
    submitTheForm,
    getInputValue,
    setInputValue,
    setValid,
    appState,
  } = useContext(AppContext);

  return (
    <React.Fragment>
      <main id="rendered">
        <div className="main-form">
          <form action="#" method="POST">
            <section className="section--header" data-name="header">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 d-none d-sm-block">
                    <div className="logo-holder"></div>
                  </div>
                  <div className="col-md-6">
                    <div className="form--header">
                      <h3 className="confirm">Recycling Container Order</h3>
                      <p>www.cleanlites.com | p. 513-641-4155</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="container-fluid">
              <div className="row">
                <OrderType
                  getInputValue={getInputValue}
                  setInputValue={setInputValue}
                />
                <Billing
                  getInputValue={getInputValue}
                  setInputValue={setInputValue}
                  setValid={setValid}
                  appState={appState}
                />
                <Generator
                  getInputValue={getInputValue}
                  setInputValue={setInputValue}
                />

                <Containers
                  getInputValue={getInputValue}
                  setInputValue={setInputValue}
                />
              </div>
            </div>
          </form>
        </div>
      </main>
      <section className="rendered-section__submit">
        <button id="submit-form" onClick={() => submitTheForm()}>
          Submit
        </button>
      </section>
    </React.Fragment>
  );
};

ConfirmForm.propTypes = {};

export default ConfirmForm;
