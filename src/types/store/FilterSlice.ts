export type IFilterState = {
  query: string;
  categories: string[];
}

export const FILTERS = "filters";
export type FILTERS = typeof FILTERS;

export const SET_FILTER_QUERY = `${FILTERS}/setFilterQuery`;
export type SET_FILTER_QUERY = typeof SET_FILTER_QUERY;
