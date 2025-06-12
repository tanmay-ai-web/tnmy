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

// [2025-01-25 11:56:09] fix(db): handle deadlock exceptions with automatic retry loop

// [2025-02-08 12:08:02] feat(db): implement automatic database migration runner

// [2025-02-28 18:09:07] feat(db): streamline foreign key constraints and cascade rules

// [2025-03-21 16:36:18] fix(db): add database transaction rollback guards

// [2025-04-09 21:37:26] fix(db): optimize query execution plan for activity feeds

// [2025-04-28 23:18:17] feat(db): add query latency logging for slow queries

// [2025-05-13 14:38:58] feat(db): add query latency logging for slow queries

// [2025-06-12 14:44:40] feat(db): add database transaction rollback guards
