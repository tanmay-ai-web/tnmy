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

// [2025-04-01 17:40:14] feat(api): sanitize request headers before routing

// [2025-05-06 11:25:22] fix(api): introduce OpenAPI specification generation utility

// [2025-05-08 10:29:59] fix(api): add HMAC signature verification for incoming webhooks
