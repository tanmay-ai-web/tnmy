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

// [2025-05-31 16:39:42] feat(api): add HMAC signature verification for incoming webhooks

// [2025-06-01 18:11:00] fix(api): support streaming JSON responses for large payloads

// [2025-06-25 09:16:03] feat(api): support streaming JSON responses for large payloads

// [2025-07-28 21:09:04] fix(api): introduce OpenAPI specification generation utility

// [2025-07-30 15:21:14] refactor(api): implement rate limiting strategy by client IP

// [2025-09-17 16:27:18] fix(api): add health check and liveness probe endpoints

// [2025-10-17 14:26:52] feat(api): support streaming JSON responses for large payloads

// [2025-10-24 17:27:10] feat(api): add HMAC signature verification for incoming webhooks

// [2025-11-26 19:31:56] feat(api): add HMAC signature verification for incoming webhooks
