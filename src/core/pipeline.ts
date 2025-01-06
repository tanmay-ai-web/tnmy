export type Middleware<T = any> = (context: T, next: () => Promise<void>) => Promise<void>;

export class Pipeline<T = any> {
  private stack: Middleware<T>[] = [];

  public use(middleware: Middleware<T>): this {
    this.stack.push(middleware);
    return this;
  }

  public async execute(context: T): Promise<void> {
    let index = -1;
    const runner = async (i: number): Promise<void> => {
      if (i <= index) throw new Error('next() called multiple times');
      index = i;
      const fn = this.stack[i];
      if (fn) {
        await fn(context, () => runner(i + 1));
      }
    };
    await runner(0);
  }
}
