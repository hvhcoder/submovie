interface Tmdb {
    type: string;
    id: string;
    season: string | null;
    vote_average: number;
    vote_count: number;
}

interface Imdb {
    id: string;
}

interface CreatedModified {
    time: string;
}

export interface Movie {
    tmdb: Tmdb;
    imdb: Imdb;
    modified: CreatedModified;
    _id: string;
    name: string;
    slug: string;
    origin_name: string;
    thumb_url: string;
    poster_url: string;
    year: number;
}

interface Category {
    id: string;
    name: string;
    slug: string;
}

interface Country {
    id: string;
    name: string;
    slug: string;
}

interface ServerData {
    name: string;
    slug: string;
    filename: string;
    link_embed: string;
    link_m3u8: string;
}

interface EpisodeServer {
    server_name: string;
    server_data: ServerData[];
}

export interface MovieDetail extends Movie {
    created: CreatedModified;
    content: string;
    type: string;
    status: string;
    trailer_url: string;
    time: string;
    episode_current: string;
    episode_total: string;
    quality: string;
    lang: string;
    notify: string;
    showtimes: string;
    view: number;
    actor: string[];
    director: string[];
    category: Category[];
    country: Country[];
    is_copyright: boolean;
    chieurap: boolean;
    sub_docquyen: boolean;
}

export interface MovieDetailResponse {
    status: boolean;
    msg: string;
    movie: MovieDetail;
    episodes: EpisodeServer[];
}
