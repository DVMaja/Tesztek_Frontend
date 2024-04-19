import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:8000/api/";

export function useGet(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL + endpoint);
        setData(response.data);
      } catch (error) {
        console.error("HIBA adatlekérés közben:", error);
      }
    };
    fetchData();
  }, [endpoint]);
  return data;
}
