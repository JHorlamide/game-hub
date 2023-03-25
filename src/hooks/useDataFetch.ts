import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useDataFetch = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setGames] = useState<T[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal, ...requestConfig })
      .then((res) => {
        setLoading(false);
        setGames(res.data.results);
      })

      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useDataFetch;
