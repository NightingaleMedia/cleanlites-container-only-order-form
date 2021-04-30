export async function handleInputs(inputs) {
  const inputList = {};
  inputs.forEach((input) => {
    if (input.id === 190) {
      const date = new Date();
      inputList[input.label] = {
        id: input.id,
        grav_name: `input_${input.id}`,
        name: input.label,
        value: `${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()} `,
      };
      return;
    }

    inputList[input.label] = {
      id: input.id,
      grav_name: `input_${input.id}`,
      name: input.label,
      choices: input.choices || [],
      type: input.type,
      unit: "",
      value: "",
      required: input.isRequired,
      // value: input.placeholder || "",
      inputs: input.inputs,
    };
  });
  return inputList;
}
