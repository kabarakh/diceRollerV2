import { FavoriteListPartInterface } from './favorite-list-part.interface';

export class Favorite implements FavoriteListPartInterface {
    title: string;
    input: string;

    type: 'favorite';

    setTitle(title): void {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }

    getType(): string {
        return this.type;
    }

    setInput(input): void {
        this.input = input;
    }

    getInput(): string {
        return this.input;
    }
}
