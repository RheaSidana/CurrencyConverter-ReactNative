import useCurrency from "./useCurrency";
import { useState, useEffect } from "react";
// import envConfig from "../../env-config";
// import axios from "axios";

const useConversion = (conversionObj) => {
  // comment the below if using API
  const [isObjValid, setObjValid] = useState(false);
  const [conversionResponse, setConversionResponse] = useState("");
  const { Conversion, ConversionRate } = useCurrency();
  const [conversionRate, setConversionRate] = useState("");
  const [conversion, setConversion] = useState("");

  useEffect(() => {
    if (conversionObj.amount != 0) {
      const conversion = Conversion(
        conversionObj.from,
        conversionObj.to,
        conversionObj.amount
      );
      setConversion(conversion);

      const convR = ConversionRate(
        conversionObj.from,
        conversionObj.to
      );
      setConversionRate(convR);
    }
  }, [isObjValid]);

  useEffect(() => {
    if (conversion != "" && conversionRate != "") {
      const response =
        "Converion Rate: " +
        conversionRate +
        "\n" +
        "Conversion Amount: " +
        conversion;

      setConversionResponse(response);
    }
  }, [conversion, conversionRate]);
  //comment till here is using the API

  //un-comment if using API
  /*
  const [conversion, setConversion] = useState(""); 
  const [conversionRate, setConversionRate] = useState(""); //un-comment if using API
  const { configuration, url } = envConfig(); //un-comment if using API
  const [conversionResponse, setConversionResponse] = useState("");
  const [isObjValid, setObjValid] = useState(false);

  useEffect(() => {
    //un-comment if using the API
    if (conversionObj.amount != 0)
      axios
        .get(
          `${url}/convert?to=${conversionObj.to}&from=${conversionObj.from}&amount=${conversionObj.amount}`,
          configuration
        )
        .then((response) => {
          const data = JSON.parse(JSON.stringify(response.data));
          setConversion(data.result.toFixed(2));
          setConversionRate(data.info.rate.toFixed(2));
          console.log(response.data);
        })
        .catch((err) => console.log(err));
  }, [isObjValid]);

  useEffect(() => {
    if (conversion != "" && conversionRate != "") {      
      const resp =
      "Converion Rate: " +
      conversionRate +
      "\n" +
      "Conversion Amount: " +
      conversion;
      setConversionResponse(resp);
    }
  }, [conversion, conversionRate]);
  */

  return {
    Result: conversionResponse,
    setObjValid: setObjValid,
    isObjValid: isObjValid,
  };
};

export default useConversion;
