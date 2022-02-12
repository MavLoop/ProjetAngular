import { Genre } from "./Genre";

export class Game {
    title: string;
    image: string;
    description: string;
    score: number;
    genre: Genre;

    constructor(title: string, image: string, description: string, score: number, genre: Genre) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.score = score;
        this.genre = genre;
    }
}