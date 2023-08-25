interface Artist {
    name: string;
    gender: string;
    birthdate: string;
    activeSince: number;
    genres: string[];
    labels: string[];
    website: string;
    image: string;
    shortDescription: string;
    isFavorite: boolean;
    id?: number;
}

export {Artist}