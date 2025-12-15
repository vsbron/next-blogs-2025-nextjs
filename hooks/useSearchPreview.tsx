import { useEffect, useState } from "react";
import { fetchSearchPosts } from "@/utils/actions/posts";

import { PostPreview } from "@/utils/types";

function useSearchPreview({ searchTerm }: { searchTerm: string }) {
  const [results, setResults] = useState<PostPreview[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if search term is longer than 3 chars
    if (searchTerm.trim().length < 3) {
      setResults([]);
      return;
    }

    // Fetch the data
    const handler = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await fetchSearchPosts(searchTerm, {}, 1, 2);
        setResults(data.posts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300); // debounce 0.3s

    return () => clearTimeout(handler);
  }, [searchTerm]);

  return { results, loading };
}

export default useSearchPreview;
