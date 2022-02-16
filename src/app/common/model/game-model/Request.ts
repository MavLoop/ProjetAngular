import { GameTest } from "./GameTest";

export interface GameRequest {
    count: number;
    games: GameTest[];
}