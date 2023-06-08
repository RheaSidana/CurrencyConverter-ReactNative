export default function envConfig() {
  API_KEY = "FC3nSmXDaa9Ky6PHw8eiOYqMitlhAveD";
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
