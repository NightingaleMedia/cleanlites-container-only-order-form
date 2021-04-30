import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getForm, submitForm } from "./resources/fetch";
import { handleInputs } from "./resources/collateFields";
import { main_sections } from "./resources/form-map";
import _, { reject } from "lodash";

import form from "./resources/form.json";

const initialState = {
  loading: true,
  message: "Loading...",
  formIsValid: false,
  inputs: {},
  sections: main_sections,
  generatorSame: false,
};

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);

  useEffect(() => {
    // pulls form from a json object instead of fetching everytime
    handleInputs(form.fields).then((res) => {
      setAppState({ ...appState, loading: false, inputs: res });
    });
  }, [getForm]);

  //for generator same
  const setLoading = (payload) => {
    if (!payload.message) {
      payload.message = "";
    }
    const state = { ...appState };
    state.loading = payload.loading;
    state.message = payload.message;
    setAppState(state);
  };

  const setLoadingMessage = (message) => {
    setAppState({ ...appState, message: message });
  };

  // sometimes next is triggered automatically, we need to know that

  async function setValid(paneName, boolean, callback = () => {}) {
    const secs = { ...appState.sections };
    secs[paneName].isValid = boolean;

    setAppState((prev) => ({
      ...prev,
      sections: secs,
    }));

    callback();
  }

  const setInputValue = (input) => {
    const i = { ...appState.inputs };

    i[input.name].value = input.value;
    setAppState((prev) => ({ ...prev, inputs: i }));
  };

  const clearGenerator = () => {
    const ip = { ...appState.inputs };

    ip.generator__city.value = "";
    ip.generator__company.value = "";
    ip.generator__address.value = "";
    ip["generator__contact-name"].value = "";
    ip.generator__zip.value = "";
    ip.generator__phone.value = "";
    ip.generator__state.value = "";

    return setAppState((prevState) => ({
      ...prevState,
      inputs: ip,
      generatorSame: false,
    }));
  };
  const setGeneratorSame = async (boolean) => {
    const ip = { ...appState.inputs };

    if (appState.generatorSame) {
      return clearGenerator();
    }
    let billingInputs = Object.keys(appState.inputs).filter(
      (i) => i.slice(0, 7) === "billing"
    );

    billingInputs = billingInputs.findIndex((i) => ip[i].value === "");

    if (billingInputs === -1 && !appState.generatorSame) {
      ip.generator__city.value = ip.billing__city.value;
      ip.generator__company.value = ip.billing__company.value;
      ip.generator__address.value = ip.billing__address.value;
      ip["generator__contact-name"].value = ip["billing__contact-name"].value;
      ip.generator__zip.value = ip.billing__zip.value;
      ip.generator__phone.value = ip.billing__phone.value;
      ip.generator__state.value = ip.billing__state.value;

      return await setAppState((prevState) => {
        return {
          ...prevState,
          inputs: ip,
          generatorSame: true,
        };
      });
    } else {
      toast.error("Billing is not complete yet!");
    }
  };
  const getInputValue = (name) => {
    if (appState.inputs == {}) {
      return "";
    }
    return appState.inputs[name].value;
  };

  const submitTheForm = () => {
    console.log(process.env);

    setAppState((prev) => ({
      ...prev,
      loading: true,
    }));
    const ip = appState.inputs;

    let all_required_empty = Object.keys(ip).filter(
      (i) => ip[i].required && ip[i].value === ""
    );

    if (all_required_empty.length > 0) {
      return all_required_empty.map((req) =>
        toast.error(`Please complete: ${req.toString()}`)
      );
    }

    let all_containers = Object.keys(ip).filter(
      (i) => i.slice(0, 10) === "containers"
    );

    all_containers = all_containers.filter((i) => ip[i].value === "");

    if (all_containers.length === 10)
      return toast.error("You must choose at least one container");

    let final_data = { form_id: 14 };

    toast.success("Submitting your form... please hang on.");
    Object.keys(ip).map((input) => {
      let the_input = ip[input];
      final_data = { ...final_data, [the_input.grav_name]: the_input.value };
    });

    submitForm(final_data)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.is_valid) {
          window.location.href = "https://www.cleanlites.com";
        }
        if (!result.is_valid) {
          console.log("bad request");
          toast.error("There was a problem, please try again");
          setAppState((prev) => ({ ...prev, loading: false }));
        }
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  };

  const setConfirming = (value) => {
    setAppState((prev) => ({
      ...prev,
      confirming: value,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        setConfirming,
        setInputValue,
        getInputValue,
        setValid,
        appState,
        setLoadingMessage,
        setLoading,
        setGeneratorSame,
        submitTheForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
