import React, { useState } from "react";
import DropDown from "react-native-paper-dropdown";

function Dropdown(props) {
  const [showDropDown, setShowDropDown] = useState(false);
  const { label, currencyList, currency, setCurrency /*, assign*/ } = props;
  const clist = currencyList.map((curr, k) => {
    return {
      label: curr.name,
      value: k,
    };
  });

  return (
    <DropDown
      label={label}
      mode={"outlined"}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={currency}
      setValue={setCurrency}
      list={clist}
    />
  );
}

export default Dropdown;
