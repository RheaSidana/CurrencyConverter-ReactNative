import { useState, useEffect } from "react";
import data from "./Dump/CurrencyList.json";

const useCurrency = () => {
  const create = (jsonData) => {
    const [currencyCountry, setCurrencyCountry] = useState([]);
    const [currencySymbolList, setCurrencySymbolList] = useState([]);

    var obj = Object.keys(data.symbols).map((symbol, key) => {
      var object = {
        currency: symbol,
        country: jsonData.symbols[symbol],
        name: symbol + " - " + jsonData.symbols[symbol],
      };

      useEffect(() => {
        setCurrencyCountry((currencyCountry) => [...currencyCountry, object]);
        setCurrencySymbolList((currencySymbolList) => [
          ...currencySymbolList,
          object.currency,
        ]);
      }, []);

      return null;
    });

    return {
      map: currencyCountry,
      list: currencySymbolList,
    };
  };

  return {
    create: create,
  };
};

export default useCurrency;
