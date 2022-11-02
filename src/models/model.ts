export abstract class Model {
    public toString(): string {
        let output: string = '';

        for (let property in this) {
            output += property + ' : ' + this[property] + '\n';
            // output = output + property + ' : ' + this[property] + '\n';
        }

        return output;
    }
}