# 📚 Book List

En fullstack webapplikation til at holde styr på bøger du vil læse eller har læst. Bygget med React, Supabase og Vercel — automatiseret via en CI/CD-pipeline i GitHub Actions.

## Tech Stack

| Lag | Teknologi |
|---|---|
| Frontend | React + TypeScript + Vite |
| Styling | Tailwind CSS |
| Backend | Supabase (PostgreSQL + REST API) |
| Hosting | Vercel (CDN) |
| CI/CD | GitHub Actions |

## CI/CD-pipeline

Projektet er automatiseret via GitHub Actions med to jobs:

```
CI — Lint, Test & Build
  ① Checkout  →  ② Setup Node v24  →  ③ npm ci  →  ④ Lint  →  ⑤ Test  →  ⑥ Build

        ↓ needs: ci

Deploy til Staging (develop)       Deploy til Produktion (main)
```

- **Fail-fast:** Pipelinen stopper øjeblikkeligt ved første fejl
- **Quality gate:** Deployment er umuligt uden bestået CI-job
- **Miljøadskillelse:** develop → staging (preview), main → produktion

## Kom i gang

### Krav

- Node.js v24
- En Supabase-konto
- En Vercel-konto

### Installation

```bash
git clone https://github.com/moar129/Book-list.git
cd book-list
npm install
```

### Database

Kør følgende SQL i Supabase SQL Editor:

```sql
create table books (
  id bigint primary key generated always as identity,
  title text not null,
  author text not null,
  description text,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);
```

### Kør lokalt

```bash
npm run dev
```

## Scripts

| Script | Beskrivelse |
|---|---|
| `npm run dev` | Start udviklingsserver |
| `npm run build` | Byg til produktion |
| `npm run lint` | Kør ESLint |
| `npm run test` | Kør Vitest unit tests |

*Eksamensprojekt — GitHub Actions til Automatisering | 4. semester, Datamatiker | Zealand Roskilde 2026*
