export const FetchWeather = async (topic) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=6cdf9c18556a4392991105259230411&q=${topic} &aqi=yes`
  );
  const data = response.json();
  return data;
};
