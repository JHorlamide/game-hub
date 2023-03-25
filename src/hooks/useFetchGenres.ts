import useDataFetch from "./useDataFetch";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useFetchGenre = () => useDataFetch<Genre>("/genres");
export default useFetchGenre;