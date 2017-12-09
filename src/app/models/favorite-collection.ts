import { FavoriteListPartInterface } from './favorite-list-part.interface';

export class FavoriteCollection implements FavoriteListPartInterface {
    title: string;
    collection: FavoriteListPartInterface[];

    type = 'favorite-collection';

    getType(): string {
        return this.type;
    }

    setCollection(collection: FavoriteListPartInterface[]): void {
        this.collection = collection;
    }

    getCollection(): FavoriteListPartInterface[] {
        return this.collection;
    }

    addToCollection(entry: FavoriteListPartInterface): void {
        this.collection.push(entry);
    }
}
