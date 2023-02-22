class MetricsSet { 
    private _id!: number;
    private _variableName!: string; 
    private _calculationResults!: {
        result_for_50: number;
        result_for_75: number;
        result_for_95: number;
        result_for_99: number;
    };

    public get id(): number { return this._id; }
    public set id(value: number) { this._id = value; }

    public get variableName(): string { return this._variableName; }
    public set variableName(value: string) { this._variableName = value; }

    public get calculationResults(): { result_for_50: number; result_for_75: number; result_for_95: number; result_for_99: number; } { return this._calculationResults; }
    public set calculationResults(value: { result_for_50: number; result_for_75: number; result_for_95: number; result_for_99: number; }) { this._calculationResults = value; }
}

export { MetricsSet };