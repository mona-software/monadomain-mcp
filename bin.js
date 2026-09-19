#!/usr/bin/env node
// monadomain-mcp = alias chạy đúng server monacloud-mcp (cùng tool cloud_domain_*, cùng tài khoản MONA Pass, cùng ví VND).
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const target = require.resolve('monacloud-mcp/dist/index.js');
await import(target);
