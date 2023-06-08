import readJsonFile from "./readJsonFile";
import data from "../BaseCurrencyList/Dump/BaseCurrency.json";
//E:\Projects\React Native\CurrencyConverter\source\BaseCurrencyList\Dump\BaseCurrency.json

const FindConversionValue = (symbol) => {
  const json = readJsonFile(data);
  var value = 0;

  const obj = Object.keys(json.rates).map((rate, k) => {
    if (rate === symbol) {
      value = json.rates[rate];
    }
    return null;
  });

  return value;
};

export default FindConversionValue;