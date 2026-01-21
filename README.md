# Rental Management Demo (Next.js + Node)

This is a demo rental management starter app (Next.js + API routes + Prisma).

Local quickstart
1. Install:
   - node >= 18
   - npm or pnpm
2. Clone repo and install deps:
   - npm install
3. Create .env (see .env.example)
4. Run Prisma generate, push & seed:
   - npx prisma generate
   - npx prisma db push
   - npm run seed
5. Start dev server:
   - npm run dev
6. Open http://localhost:3000

Seeded demo accounts:
- Admin: admin@demo.local / Password123!
- Landlord: landlord@demo.local / Password123!
- Tenant: tenant@demo.local / Password123!

Vercel deployment
1. Connect your GitHub account to Vercel and import the `Nestor1125/rental-management-system` repository.
2. Set environment variables on Vercel (see .env.example) and in Build & Output settings run prisma commands in build.
3. Deploy — Vercel will build and publish the site.

Notes
- Local DB uses SQLite (good for demo). For production on Vercel use a managed Postgres (Neon/PlanetScale) and set DATABASE_URL accordingly.
- This demo uses JWT for authentication and simple RBAC checks in API routes.