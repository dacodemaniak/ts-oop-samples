import { Model } from "./model";

export class POETypeModel extends Model {
    private _title: string = '';

    public set title(title: string) {
        this._title = title;
    }

    public get title(): string {
        return this._title;
    }
}