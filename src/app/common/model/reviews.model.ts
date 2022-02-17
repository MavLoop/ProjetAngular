import { Game } from "./game.model";
import { Gamer } from "./gamer";
import { Moderator } from "./moderator";

export interface Reviews {
    id:number
    description:string
    sendingDate:Date
    rating:number
    gamer:Gamer
    game:Game
    moderator: Moderator
    moderatorDate:Date


}
