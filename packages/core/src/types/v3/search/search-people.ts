import { PaginatedResponse } from "../PaginatedResults";
import {BaseQueryParams, SearchQueryParams} from "./SearchBaseQueryParamters";

// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
export interface SearchPeopleResponse extends PaginatedResponse<SearchPeopleResult> {}

export interface SearchPeopleResult {
  profile_path: null | string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  known_for: SearchPeopleKnownFor[];
  name: string;
  original_name: string;
  popularity: number;
}

export interface SearchPeopleKnownFor {
  poster_path: string;
  adult?: boolean;
  overview: string;
  release_date?: string;
  original_title?: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  title?: string;
  backdrop_path: null | string;
  popularity: number;
  vote_count: number;
  video?: boolean;
  vote_average: number;
  first_air_date?: string;
  origin_country?: string[];
  name?: string;
  original_name?: string;
}



// ESLint might complain about this empty interface, but it was left empty (and not removed) so locations that used this type wouldn't break or have to be changed.
export interface SearchPeopleParams extends SearchQueryParams {}