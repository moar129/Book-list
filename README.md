# 📚 Book List

En fullstack webapplikation til at holde styr på bøger du vil læse eller har læst. Bygget med React, Supabase og Vercel — automatiseret via en CI/CD-pipeline i GitHub Actions.

## Tech Stack

| Lag | Teknologi |
|---|---|
| Frontend | React 19 + TypeScript + Vite |
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
git clone https://github.com/DITBRUGERNAVN/book-list.git
cd book-list
npm install
```

### Environment variables

Opret en `.env.local` fil i roden af projektet:

```
VITE_SUPABASE_URL=din-supabase-url
VITE_SUPABASE_ANON_KEY=din-supabase-anon-key
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

## GitHub Secrets

Følgende secrets skal sættes op i GitHub repository settings:

| Secret | Beskrivelse |
|---|---|
| `VERCEL_TOKEN` | Vercel API token |
| `VERCEL_ORG_ID` | Vercel organisation ID |
| `VERCEL_PROJECT_ID` | Vercel projekt ID |
| `VITE_SUPABASE_URL` | Supabase projekt URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/publishable key |

## Projektstruktur

```
src/
├── components/
│   ├── BookForm.tsx        # Formular til at tilføje bøger
│   ├── BookList.tsx        # Liste over bøger
│   └── BookList.test.tsx   # Unit tests
├── hooks/
│   └── useBooks.ts         # Supabase data-logik
├── lib/
│   └── supabase.ts         # Supabase klient
├── types/
│   └── book.ts             # TypeScript typer
└── App.tsx                 # Rod-komponent
```

---

*Eksamensprojekt — GitHub Actions til Automatisering | 4. semester, Datamatiker | Zealand Roskilde 2026*