export interface AccountGetMovieWatchlistResponse {
    page: number;
    results: AccountGetMovieWatchlistResult[];
    total_pages: number;
    total_results: number;
}

export interface AccountGetMovieWatchlistResult {
    adult: boolean;
    backdrop_path: null | string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path: null | string;
    popularity: number;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface AccountGetMovieWatchlistParams {
    language?: string;
    session_id: string;
    sort_by?: string;
    page?: number;
}
