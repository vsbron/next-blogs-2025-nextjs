import { useQuery } from "@tanstack/react-query";
import { fetchGeneralStats } from "@/utils/actions/posts";

function useGeneralStats() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["general-stats"],
    queryFn: fetchGeneralStats,
  });

  // Returned data
  return { data, isLoading, error };
}

export default useGeneralStats;
