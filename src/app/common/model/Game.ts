import { Genre } from "./Genre";

export class Game {
    id: number;
    title: string;
    image: string;
    description: string;
    score: number;
    genre: Genre;

    constructor(id: number, title: string, image: string, description: string, score: number, genre: Genre) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;
        this.score = score;
        this.genre = genre;
    }
}