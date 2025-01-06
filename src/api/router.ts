export type HttpHandler = (req: any, res: any) => Promise<any> | any;

export class Router {
  private routes = new Map<string, HttpHandler>();

  public get(path: string, handler: HttpHandler): this {
    this.routes.set(`GET:${path}`, handler);
    return this;
  }

  public post(path: string, handler: HttpHandler): this {
    this.routes.set(`POST:${path}`, handler);
    return this;
  }

  public resolve(method: string, path: string): HttpHandler | undefined {
    return this.routes.get(`${method.toUpperCase()}:${path}`);
  }
}
