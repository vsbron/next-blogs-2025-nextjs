import { fetchAllPosts } from "@/utils/actions/posts";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

function useAllPosts() {
  // Getting the state from URL
  const searchParams = useSearchParams();

  //// PAGINATION
  // Getting the current page number
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isLoading, error } = useQuery({
    queryKey: ["all-posts", page],
    queryFn: () => fetchAllPosts(page),
  });

  // Returned data
  return { data, isLoading, error, page };
}

export default useAllPosts;
