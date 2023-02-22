class SingleMetric {
    private _id!: number;
    private _variableName!: string; 
    private _calculationResult!: number;
        
    public get id(): number { return this._id; }
    public set id(value: number) { this._id = value; }
    
    public get variableName(): string { return this._variableName; }
    public set variableName(value: string) { this._variableName = value; }

    public get calculationResult(): number { return this._calculationResult; }
    public set calculationResult(value: number) { this._calculationResult = value; }
    
}

export { SingleMetric };