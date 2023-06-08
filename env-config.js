export default function envConfig() {
  API_KEY = "<API_KEY>";
  const config = {
    headers: {
      apikey: API_KEY,
    },
  };

  const url = "https://api.apilayer.com/exchangerates_data";
  return {
    configuration: config,
    url: url,
  };
}
