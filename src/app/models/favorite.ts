import { AbstractFavoriteListPart } from './abstract.favorite-list-part';

export class Favorite extends AbstractFavoriteListPart {
    input: string;

    type: 'favorite';

    setInput(input): void {
        this.input = input;
    }

    getInput(): string {
        return this.input;
    }
}
