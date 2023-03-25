import useDataFetch from "./useDataFetch";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const useFetchPlatforms = () => useDataFetch<Platforms>("/platforms/lists/parents");

export default useFetchPlatforms;