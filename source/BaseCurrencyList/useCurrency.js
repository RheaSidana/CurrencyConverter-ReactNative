import FindConversionValue from "../accessibilty/findConversionValue";

const useCurrency = () => {
  const ConversionRate = (from, to) => {
    return (FindConversionValue(to) / FindConversionValue(from))
      .toFixed(2)
      .toString();
  };

  const Conversion = (from, to, amount) => {
    return (amount * ConversionRate(from, to)).toFixed(2).toString();
  };
  return {
    Conversion: Conversion,
    ConversionRate: ConversionRate,
  };
};

export default useCurrency;
