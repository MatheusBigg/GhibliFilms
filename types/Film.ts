declare interface Person {
    id: string;
    name: string;
    gender: string;
    age?: string;
    eye_color: string;
    hair_color: string;
    films: Film[]; 
    species: string;
    url: string;
}

declare interface Species {
    id: string;
    name: string;
    classification: string;
    eye_colors: string[];
    hair_colors: string[];
    people: string[]; // Array of URLs referencing people in this species
    films: string[]; // Array of URLs referencing films featuring this species
    url: string; // Species' API endpoint URL
}

declare interface Film {
    id: number;
    title: string;
    original_title: string;
    original_title_romanised: string;
    image: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    rt_score: string;
    people: Person[];
    species: Species[];
    locations: string[];
    vehicles: string[];
    url: string;
}