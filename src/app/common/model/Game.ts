import { Genre } from "./Genre";

/*export class Game {
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
}*/

export interface Game {
    id: number;
    name: string;
    description: string;
    releaseDate: Date;
    classificationName: string;
    genreName: string;
    editorName: string;
    platformNames: string[];
    businessModelNames: string

}