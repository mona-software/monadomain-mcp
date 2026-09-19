# monadomain-mcp

MCP server cho AI agent **mua tên miền .vn và quốc tế ngay trong phiên code**, trả bằng VND. Đây là gói alias của [`monacloud-mcp`](https://www.npmjs.com/package/monacloud-mcp) (MONA Cloud, The MONA Group, Việt Nam): cùng server, cùng 21 tool `cloud_domain_*`, cùng tài khoản MONA Pass và ví VND.

## Cài 1 dòng

```bash
# Claude Code
claude mcp add monadomain -- npx -y monadomain-mcp

# Codex (~/.codex/config.toml)
[mcp_servers.monadomain]
command = "npx"
args = ["-y", "monadomain-mcp"]

# Cursor (.cursor/mcp.json)
{ "mcpServers": { "monadomain": { "command": "npx", "args": ["-y", "monadomain-mcp"] } } }
```

## Nói gì với AI

> Mua tên miền cho app này, ưu tiên .vn, duyệt tới 800.000đ.

AI sẽ: `cloud_domain_search` (tra tên + giá VND đã VAT, không cần đăng nhập) → hỏi bạn xác nhận chính tả và duyệt tiền → `cloud_domain_reserve` giữ chỗ 30 phút, in QR VietQR cho bạn quét → bạn bấm `claim_url`, đăng nhập MONA Pass một bước (Google/GitHub/email, lần đầu tự tạo ví) → tên miền về tài khoản → `cloud_domain_attach` trỏ DNS + SSL vào app.

- Đuôi bán ngay có giá: .vn .com.vn .net.vn .id.vn .io.vn .edu.vn .com .net .org .info .biz .io .ai .app .dev .shop .store .online .site .xyz .tech .cloud .vip .top .co .me .tv .asia .us .uk — còn 500+ đuôi khác báo giá khi mua.
- .vn: AI điền bản khai, bạn xác thực chủ thể một lần theo luật VNNIC.
- Tài liệu cho agent: https://monadomain.vn/AGENTS.md · https://monadomain.vn/llms.txt · REST không cần token: `GET https://api.monacloud.vn/api/domains/search?q=<tên>&tlds=vn,com`.

Vận hành bởi The MONA Group (mona.media · monacloud.vn), từ 2016, hơn 14.000 dự án. Tổng đài 1900 636 648 · info@themona.global.

---

**English:** MCP server that lets AI agents (Claude Code, Codex, Cursor, Gemini) search, reserve and buy `.vn` and international domains in VND from the terminal; guests can reserve before creating an account. Alias of `monacloud-mcp`.
