import {PaginatedResponse} from '../PaginatedResults';


// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
export interface SearchMultiSearchResponse extends PaginatedResponse<SearchMultiSearchResult> {}

export interface SearchMultiSearchResult {
  poster_path?: null | string;
  popularity: number;
  id: number;
  overview?: string;
  backdrop_path?: null | string;
  vote_average?: number;
  media_type: string;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
  adult?: boolean;
  release_date?: string;
  original_title?: string;
  title?: string;
  video?: boolean;
  profile_path?: null | string;
  known_for?: SearchMultiSearchResult[];
}

export interface SearchMultiSearchParams {
  query: string;
  language?: string;
  page?: number;
  include_adult?: boolean;

}
