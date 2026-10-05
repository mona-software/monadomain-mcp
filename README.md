# monadomain-mcp

MCP server that lets AI agents search, reserve and buy `.vn` and international domains in VND. This package is an alias that runs [`monacloud-mcp`](https://github.com/mona-software/monacloud-mcp): same server, same `cloud_domain_*` tools, same MONA Pass account and VND wallet.

The source for this alias is not public. Source code, issues and full documentation live in [mona-software/monacloud-mcp](https://github.com/mona-software/monacloud-mcp).

## Install

Published on npm as `monadomain-mcp` (also available under the alias name `monadomain`). Requires Node.js 20 or later.

### Claude Code

```bash
claude mcp add monadomain -- npx -y monadomain-mcp
```

### Codex (`~/.codex/config.toml`)

```toml
[mcp_servers.monadomain]
command = "npx"
args = ["-y", "monadomain-mcp"]
```

### Cursor (`.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "monadomain": { "command": "npx", "args": ["-y", "monadomain-mcp"] }
  }
}
```

## Quick start

Ask your agent, for example: "Buy a domain for this app, prefer .vn."

A typical flow:

1. `cloud_domain_search` checks availability and returns prices in VND including VAT. No login needed.
2. The agent confirms the spelling and the cost with you.
3. Without an account, `cloud_domain_reserve` holds the name and returns a VietQR code plus a `claim_url`; you pay, open the link and sign in to MONA Pass to claim it. With an account, `cloud_domain_buy` pays from the wallet.
4. `cloud_domain_attach` points DNS at your app and sets up SSL.

`.vn` domains require registrant details (`cloud_domain_registrant_set`) and a one-time owner verification (`cloud_domain_verify_start`).

## Usage

Domain tools include `cloud_domain_search`, `cloud_domain_suggest`, `cloud_domain_tlds`, `cloud_domain_reserve`, `cloud_domain_claim`, `cloud_domain_buy`, `cloud_domain_renew`, `cloud_domain_dns_list`/`_add`/`_update`/`_delete`, `cloud_domain_ns_set`, `cloud_domain_attach` and `cloud_domain_health`. Because the package runs the full `monacloud-mcp` server, all other MONA Cloud tools are available too.

Sign in to buy directly from the wallet:

```bash
npx -y monadomain-mcp login
```

## Configuration

| Variable | Purpose |
|---|---|
| `MONACLOUD_TOKEN` | Optional MONA Pass token; not needed to search or reserve |

All other variables are documented in the [monacloud-mcp README](https://github.com/mona-software/monacloud-mcp#configuration).

More information: [monadomain.vn](https://monadomain.vn).

## License

MIT

**MONA Domain is part of MONA Cloud by The MONA Group.**
