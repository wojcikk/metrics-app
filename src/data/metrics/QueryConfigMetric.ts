class QueryConfigMetric {
    private _server!: string; 
    private _app!: string; 
    private _env!: string; 


    
    public get server(): string {
        return this._server;
    }
    public set server(value: string) {
        this._server = value;
    }

    public get app(): string {
        return this._app;
    }
    public set app(value: string) {
        this._app = value;
    }

    public get env(): string {
        return this._env;
    }
    public set env(value: string) {
        this._env = value;
    }
}



export { QueryConfigMetric };