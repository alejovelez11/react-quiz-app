import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://opentdb.com/";

export const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fecthData();
  }, []);

  return { response, error, loading };
};
