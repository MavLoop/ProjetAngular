import { BusinessModelTest } from "./BusinessModelTest";
import { ClassificationTest } from "./ClassificationTest";
import { EditorTest } from "./EditorTest";
import { GenreTest } from "./GenreTest";
import { PlatformTest } from "./PlatformTest";
import { ReviewTest } from "./ReviewTest";


export interface GameTest {
    id: number;
    name: string;
    description: string;
    releaseDate: Date;
    image: string;
    reviews: ReviewTest[];
    classification: ClassificationTest;
    genre: GenreTest;
    editor: EditorTest;
    platforms: PlatformTest[];
    businessModel: BusinessModelTest;
}