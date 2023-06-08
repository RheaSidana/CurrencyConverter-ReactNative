import React, { Fragment, useEffect, useState } from "react";
import useCurrencyCountry from "./CurrencyList/useCurrencyCountry";
import { View } from "react-native";
import Dropdown from "../components/Dropdown/dropDown";
import styles from "./mainStyles";
import { TextInput, Button, Text } from "react-native-paper";
import useMain from "./useMain";
import useConversion from "./BaseCurrencyList/useConversion";

const Main = () => {
  const initObj = {
    from: "",
    to: "",
    amount: 0,
  }
  const [ConversionObj, setConversionObj] = useState(initObj);
  const [conversion, setConversion] = useState("");
  const { Result, isObjValid ,setObjValid } = useConversion(ConversionObj);
  const { CurrencyCountry } = useCurrencyCountry();
  const {
    onConvert,
    currencyFrom,
    setCurrencyFrom,
    currencyTo,
    setCurrencyTo,
    setAmount,
    isDisable,
  } = useMain(CurrencyCountry, setConversionObj);

  useEffect(()=>{
    if(JSON.stringify(ConversionObj) !== JSON.stringify(initObj)){
      setObjValid(!isObjValid);
      if (conversion !== Result){
        setConversion(Result);
      }
    }
  },[ConversionObj, Result])

  return (
    <React.Fragment>
      <Dropdown
        label={"Currency From"}
        // remove slice to access the whole list 
        currencyList={CurrencyCountry.slice(0, 5)}
        currency={currencyFrom}
        setCurrency={setCurrencyFrom}
        testID = "Currency From"
      />
      <View style={styles.spacerStyle} />
      <Dropdown
        label={"Currency To"}
        // remove slice to access the whole list 
        currencyList={CurrencyCountry.slice(0, 5)}
        currency={currencyTo}
        setCurrency={setCurrencyTo}
        testID = "Currency To"
      />
      <View style={styles.spacerStyle} />
      <TextInput
        placeholder="Enter the amount here!"
        name="Amount"
        keyboardType="numeric"
        onChangeText={setAmount}
        testID="Amount"
      />
      <View style={styles.spacerStyle} />
      <View style={styles.spacerStyle} />
      <Button
        icon="swap-horizontal"
        mode="elevated"
        onPress={onConvert}
        disabled={isDisable}
        testID="Convert"
      >
        Convert
      </Button>
      <View style={styles.spacerStyle} />
      <View style={styles.spacerStyle} />
      <View style={styles.spacerStyle} />
      <Text variant="titleLarge">{conversion}</Text>
      </React.Fragment>
  );
};

export default Main;