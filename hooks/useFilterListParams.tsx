import { ReadonlyURLSearchParams } from "next/navigation";

// Small hook to use on lists with filters
export function useListParams(searchParams: ReadonlyURLSearchParams) {
  const filters: Record<string, string> = {};
  searchParams.forEach((value, key) => (filters[key] = value));

  const page = Number(searchParams.get("page") || 1);

  return { filters, page };
}
