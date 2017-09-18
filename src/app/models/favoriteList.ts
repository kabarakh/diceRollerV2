import { FavoriteListPartInterface } from './favoriteListPartInterface';

export class FavoriteList implements FavoriteListPartInterface {
    title: string;
    public subFavoriteList: FavoriteList[] = [];

    public constructor(title: string) {
        this.title = title;
    }
}
