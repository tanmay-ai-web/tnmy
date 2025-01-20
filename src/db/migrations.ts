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

// [2025-01-09 12:41:57] refactor(db): optimize query execution plan for activity feeds

// [2025-01-15 17:35:14] refactor(db): implement automatic database migration runner

// [2025-01-20 09:56:54] fix(db): implement automatic database migration runner
