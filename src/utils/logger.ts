export class Logger {
  constructor(private context: { service: string }) {}

  info(msg: string, meta?: Record<string, unknown>) {
    console.log(JSON.stringify({ level: 'info', service: this.context.service, message: msg, timestamp: new Date().toISOString(), ...meta }));
  }

  warn(msg: string, meta?: Record<string, unknown>) {
    console.warn(JSON.stringify({ level: 'warn', service: this.context.service, message: msg, timestamp: new Date().toISOString(), ...meta }));
  }

  error(msg: string, err?: Error, meta?: Record<string, unknown>) {
    console.error(JSON.stringify({ level: 'error', service: this.context.service, message: msg, error: err?.message, stack: err?.stack, timestamp: new Date().toISOString(), ...meta }));
  }
}

// [2025-01-09 15:54:39] feat(utils): create structured JSON logger with trace correlation IDs

// [2025-01-13 19:54:43] feat(utils): add cryptographic token generation utility
