import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useFetchGame = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    setLoading(true);

    apiClient
      .get<FetchGameResponse>("/games", { signal })
      .then((res) => {
        setLoading(false);
        console.log(res.data.results);
        setGames(res.data.results);
      })

      .catch((error) => {
        setLoading(false);
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error, loading };
};

export default useFetchGame;
