import { BusinessModel } from "./business-model.model";
import { Classification } from "./classification.model";
import { Editor } from "./editor.model";
import { Genre } from "./genre.model";
import { Platform } from "./platform.model";

export interface Game {
    id: number;
    name: string;
    description: string;
    releaseDate: Date;
    classification: Classification;
    genre: Genre;
    editor: Editor;
    platforms: Platform[];
    businessModel: BusinessModel
}
