import DataFetch from "../DataFetch";

export default class DataStore {
    private _data: string;
    

    constructor() {
        this._data = DataFetch()
    }

    
    public get data(): string {
        return this._data;
    }
    public set data(value: string) {
        this._data = value;
    }

}