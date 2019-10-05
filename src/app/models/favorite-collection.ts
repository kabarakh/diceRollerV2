import { AbstractFavoriteListPart } from './abstract.favorite-list-part';

export class FavoriteCollection extends AbstractFavoriteListPart {
    collection: AbstractFavoriteListPart[];

    type = 'favorite-collection';

    setCollection(collection: AbstractFavoriteListPart[]): void {
        this.collection = collection;
    }

    getCollection(): AbstractFavoriteListPart[] {
        return this.collection;
    }

    addToCollection(entry: AbstractFavoriteListPart): void {
        this.collection.push(entry);
    }
}
