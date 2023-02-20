class MetricsSet { 
    private _variableName!: string; 
    
    private _calculationResults!: {
        result_for_50: number;
        result_for_75: number;
        result_for_95: number;
        result_for_99: number;
    };

    // public constructor (variableName: string, calculationResults: []) {
    //     this._variableName = variableName;
    //     this._calculationResults = calculationResults;
    // }


    public get variableName(): string {
        return this._variableName;
    }
    public set variableName(value: string) {
        this._variableName = value;
    }

    public get calculationResults(): {
        result_for_50: number;
        result_for_75: number;
        result_for_95: number;
        result_for_99: number;
    } {
        return this._calculationResults;
    }
    public set calculationResults(value: {
        result_for_50: number;
        result_for_75: number;
        result_for_95: number;
        result_for_99: number;
    }) {
        this._calculationResults = value;
    }
}

export { MetricsSet };