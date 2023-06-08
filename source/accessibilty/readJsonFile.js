const readJsonFile = (data) => {
  const json = JSON.parse(JSON.stringify(data));
  return json;
}

export default readJsonFile;