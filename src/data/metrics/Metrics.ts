import { SingleMetric } from "./SingleMetric";
import { MetricsSet } from "./MetricsSet";
import { QueryConfigMetric } from "./QueryConfigMetric";

class Metrics {
    private _singleMetrics: {
        metric: SingleMetric;
    }[] = [];
    
    private _histogramMetrics: {
        metricSet: MetricsSet;
    }[] = [];

    private _queryConfigMetrics!: QueryConfigMetric;
    



    public get singleMetrics(): {
        metric: SingleMetric;
    }[] {
        return this._singleMetrics;
    }
    public set singleMetrics(value: {
        metric: SingleMetric;
    }[]) {
        this._singleMetrics = value;
    }

   

    public get histogramMetrics(): {
        metricSet: MetricsSet;
    }[] {
        return this._histogramMetrics;
    }
    public set histogramMetrics(value: {
        metricSet: MetricsSet;
    }[]) {
        this._histogramMetrics = value;
    }


    public get queryConfigMetrics(): QueryConfigMetric {
        return this._queryConfigMetrics;
    }
    public set queryConfigMetrics(value: QueryConfigMetric) {
        this._queryConfigMetrics = value;
    }
}

export { Metrics }