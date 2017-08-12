export class SingleDie {
    protected input: string;
    protected average: number;
    protected sum: number;
    protected count = 0;
    protected type = 0;
    protected delimiter: string;

    public constructor(input: string) {
        this.input = input;
        this.delimiter = input.charAt(0);

        input = input.substr(1);

        if (input.match(/[dw]/)) {
            const inputParts = input.split(/[dw]/);
            this.count = inputParts[0] === '' ? 1 : parseInt(inputParts[0], 10);
            this.type = parseInt(inputParts[1], 10);
        }
    }
}
