export interface Migration {
  id: string;
  name: string;
  up: () => Promise<void>;
  down: () => Promise<void>;
}

export class MigrationRunner {
  private applied = new Set<string>();

  async run(migrations: Migration[]): Promise<string[]> {
    const executed: string[] = [];
    for (const m of migrations) {
      if (!this.applied.has(m.id)) {
        await m.up();
        this.applied.add(m.id);
        executed.push(m.id);
      }
    }
    return executed;
  }
}
