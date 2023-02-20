class SingleMetric {
    private _variableName!: string; 
    private _calculationResult!: number;
    
    public get variableName(): string {
        return this._variableName;
    }
    public set variableName(value: string) {
        this._variableName = value;
    }

    public get calculationResult(): number {
        return this._calculationResult;
    }
    public set calculationResult(value: number) {
        this._calculationResult = value;
    }
}

export { SingleMetric };