declare module "express" {
  export type Request = unknown;
  export type Response = {
    json: (body: unknown) => void;
  };

  export type Handler = (req: Request, res: Response) => void;

  export type RouterType = {
    get: (path: string, handler: Handler) => void;
  };

  export function Router(): RouterType;

  export type App = {
    use: (...args: unknown[]) => void;
    get: (path: string, handler: Handler) => void;
    listen: (port: number, cb?: () => void) => void;
  };

  type ExpressFactory = {
    (): App;
    json: (options?: unknown) => unknown;
  };

  const express: ExpressFactory;
  export default express;
}
