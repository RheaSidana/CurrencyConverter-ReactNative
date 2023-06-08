import { useEffect, useState } from "react";

const useMain = (list, setConversionObj) => {
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  
  useEffect(() => {
    if (currencyFrom !== "" && currencyTo !== "" && amount !== "")
      toggleButton();
  }, [currencyFrom, currencyTo, amount]);
  

  const toggleButton = () => {
    setIsDisable(!isDisable);
  }

  const onConvert = () => {
    setConversionObj({
      amount: amount,
      from: JSON.parse(JSON.stringify(list[currencyFrom])).currency,
      to: JSON.parse(JSON.stringify(list[currencyTo])).currency,
    });

    toggleButton();
  };

  return {
    currencyFrom: currencyFrom,
    setCurrencyFrom: setCurrencyFrom,
    currencyTo: currencyTo,
    setCurrencyTo: setCurrencyTo,
    setAmount: setAmount,
    onConvert: onConvert,
    isDisable: isDisable,
  };
};

export default useMain;
