import { Metrics } from "./Metrics";
import { QueryConfigMetric } from "./QueryConfigMetric";

class MetricsContainer {
    private _metricsContainer: {
        containerLabel: string;
        metrics: Metrics;
    }[] = [];
    

    private _queryConfigMetrics!: QueryConfigMetric;

    public get metricsContainer(): {
        containerLabel: string;
        metrics: Metrics;
    }[] {
        return this._metricsContainer;
    }
    public set metricsContainer(value: {
        containerLabel: string;
        metrics: Metrics;
    }[]) {
        this._metricsContainer = value;
    }
}

export { MetricsContainer }