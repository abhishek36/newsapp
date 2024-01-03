import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialstate = {
    weather: null,
  };
  const [state, dispatch] = useReducer(WeatherReducer, initialstate);
  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContext;
