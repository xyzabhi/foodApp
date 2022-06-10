import { useState, useEffect } from "react";
import food from "../api/food";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await food.get(`/restaurant`);

      setResults(response.data.Result);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("No Results Found");
    }
  };
  useEffect(() => {
    console.log("hello");
    searchApi();
  }, []);

  return [searchApi, results, errorMessage];
};
