export class Game {
    title: string;
    image: string;
    description: string;
    score: number;
    genres: string[];

    constructor(title: string, image: string, description: string, score: number, genres: string[]) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.score = score;
        this.genres = genres;
    }
}