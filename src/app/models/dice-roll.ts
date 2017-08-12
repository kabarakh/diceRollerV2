import { SingleDie } from './single-die';

export class DiceRoll {
    dice: SingleDie[] = [];
    average: number;
    sum: number;
    date: Date;
    input: string;

    public constructor(input: string) {
        this.date = new Date();
        this.input = input;

        const inputParts = this.prepareInputParts(input);

        inputParts.forEach(singlePart => {
            this.dice.push(new SingleDie(singlePart));
        });
    }

    protected prepareInputParts(input: string): Array<string>  {
        input = input.toLowerCase()
            .replace(/\s*/g, '')
            .replace(/[^0-9wd+\-]/g, '')
            .replace(/(\+|-)/g, ' $1');

        if (!input.match(/^-|\+/)) {
            input = '+' + input;
        }
        return input.split(' ');
    }
}
