# tnmy 🚀

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/tanmay-ai-web/tnmy)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Coverage](https://img.shields.io/badge/coverage-98.4%25-brightgreen.svg)](https://github.com/tanmay-ai-web/tnmy)
[![Version](https://img.shields.io/badge/version-2.4.0-orange.svg)](CHANGELOG.md)

**tnmy** is a modular, high-performance developer toolkit and microservice foundation built with TypeScript. It provides unified primitives for asynchronous pipeline orchestration, dual-tier caching (Memory + Redis), resilient HTTP routing, structured logging, and robust authentication middleware.

---

## ✨ Features

- **⚡ Core Event Engine**: High-throughput asynchronous pipeline with backpressure regulation and graceful lifecycle management.
- **🛡️ Secure Auth Layer**: Multi-tenant RBAC, OAuth2 PKCE integration, and Argon2id token rotation.
- **📦 Distributed Caching**: Stale-while-revalidate caching policies, deterministic stampede protection, and Redis cluster support.
- **🗄️ Database Resilience**: Connection pooling with automated migration execution, deadlock retries, and read-replica routing.
- **🔍 Observability**: Structured JSON logging with distributed trace correlation IDs and real-time health probe endpoints.
- **🧪 Production Ready**: >98% test coverage with automated unit, integration, and concurrency stress suites.

---

## 📁 Architecture Overview

```
tnmy/
├── src/
│   ├── api/          # REST routing, validation schemas, rate limiters
│   ├── auth/         # JWT verification, RBAC middleware, session store
│   ├── cache/        # Dual-layer Memory + Redis cluster adapter
│   ├── core/         # Event dispatcher, pipeline orchestration, lifecycle hooks
│   ├── db/           # Connection pooling, migrations, transaction guards
│   ├── utils/        # Crypto, ISO-8601 datetime, structured logger
│   └── index.ts      # Main module export surface
├── tests/            # End-to-end integration & unit test suites
├── CHANGELOG.md      # Semantic release history (v1.0.0 → v2.4.0)
└── tsconfig.json     # Strict TypeScript configuration
```

---

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/tanmay-ai-web/tnmy.git
cd tnmy
npm install
```

### Basic Usage

```typescript
import { createEngine, createRouter, RedisCacheProvider, Logger } from 'tnmy';

const logger = new Logger({ service: 'tnmy-service' });
const cache = new RedisCacheProvider({ url: process.env.REDIS_URL });

const app = createEngine({
  cache,
  logger,
  gracefulShutdown: true
});

const router = createRouter();

router.get('/health', async (req, res) => {
  return res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.use('/api/v1', router);
app.listen(3000, () => {
  logger.info('Server active on port 3000');
});
```

---

## 🧪 Testing

```bash
# Run unit & integration test suites
npm test

# Run concurrency stress benchmark
npm run test:stress
```

---

## 📜 License

Distributed under the [MIT License](LICENSE). Created & maintained by [TANMAY JAIN](https://github.com/tanmay-ai-web).
