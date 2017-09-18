import { FavoriteListPartInterface } from './favoriteListPartInterface';

export class Favorite implements FavoriteListPartInterface {
    title: string;
    input: string;

    public constructor(title: string, input: string) {
        this.title = title;
        this.input = input;
    }
}
