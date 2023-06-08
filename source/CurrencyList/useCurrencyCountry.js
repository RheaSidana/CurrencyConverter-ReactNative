// import envConfig from "../../env-config";
import { useState, useEffect } from "react";
// import axios from "axios";
import useCurrency from "./useCurrency";
import readJsonFile from "../accessibilty/readJsonFile";
import data from "./Dump/CurrencyList.json";

const useCurrencyCountry = () => {
  // const [currencies, setCurrencies] = useState([]);  //un-comment if using API
  // const { configuration, url } = envConfig();  //un-comment if using API
  const { create } = useCurrency();

  const createCurrency = create(readJsonFile(data)); // comment if using API
  const currencyCountry = createCurrency.map;     // comment if using API
  const currencyList = createCurrency.list;      // comment if using API

  /* useEffect(() => {                                  //un-comment if using the API
    axios
      .get(`${url}/symbols`, configuration)
      .then((response) => {
        const data = JSON.parse(JSON.stringify(response.data));
        setCurrencies(data);
        const createCurrency = create(currencies);
        const currencyCountry = createCurrency.map;
        const currencyList = createCurrency.list;
      })
      .catch((err) => console.log(err));
  }, []);
  */

  return {
    CurrencyCountry: currencyCountry,
    CurrencyList: currencyList,
  };
};

export default useCurrencyCountry;
